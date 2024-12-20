import React, { useState } from "react"; // Added useState for modal and form data handling
import { useParams } from "react-router-dom";
import packages from "./PackageData"; // Ensure the correct path is used for importing package data
import { FaBuilding, FaCar, FaUtensils, FaHiking } from "react-icons/fa"; // Icons for package features

const PackageDetails = () => {
  const { id } = useParams(); // UseParams for retrieving package id from the route
  const packageDetails = packages.find((pack) => pack.id === parseInt(id)); // Match package by id

  const [isModalOpen, setIsModalOpen] = useState(false); // State for controlling the modal visibility
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    departureDate: "",
  }); // State for managing form data

  // If no package matches the id, display a fallback message
  if (!packageDetails) {
    return <div className="text-center text-gray-600 mt-20">No Package Found</div>;
  }

  // Handlers for modal open, close, and form input changes
  const handleOpenModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Update form data dynamically based on input
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log("Form Submitted", formData); // Debugging: Log submitted form data
    alert("Booking Confirmed!"); // Notify the user about the booking
    handleCloseModal(); // Close the modal after submission
  };

  return (
    <div className="pt-20 max-w-6xl mx-auto p-8 flex flex-col md:flex-row">
      {/* Left Section (Image + Includes) */}
      <div className="w-full md:w-1/2 h-auto flex flex-col">
        <div className="h-[45vh]">
          <img
            src={packageDetails.image}
            alt={packageDetails.title}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Package Includes</h2>
          <ul className="flex space-x-6">
            {/* Each feature is represented with an icon and label */}
            <li className="flex flex-col items-center">
              <FaUtensils size={40} />
              <span>Meal</span>
            </li>
            <li className="flex flex-col items-center">
              <FaCar size={40} />
              <span>Transport</span>
            </li>
            <li className="flex flex-col items-center">
              <FaBuilding size={40} />
              <span>Hotel</span>
            </li>
            <li className="flex flex-col items-center">
              <FaHiking size={40} />
              <span>Sightsee</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section (Details + Additional Information) */}
      <div className="w-full md:w-1/2 flex flex-col justify-between md:pl-8">
        <div>
          {/* Package details */}
          <h1 className="text-4xl font-bold mb-6">{packageDetails.title}</h1>
          <p className="text-gray-600 mb-4 text-xl">{packageDetails.location}</p>
          <p className="text-lg mb-6">{packageDetails.description}</p>
          <p className="text-2xl font-bold text-blue-600 mb-6">₹{packageDetails.price}</p>
          <button
            onClick={handleOpenModal} // Open the booking modal
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            Book Now
          </button>
        </div>

        {/* Additional details about the package */}
        <div className="mt-20 pt-5">
          <h2 className="text-2xl font-semibold mb-4">Additional Details</h2>
          <ul className="list-disc pl-6 text-black-700">
            <li>Guided tours available</li>
            <li>24/7 customer support</li>
            <li>Flexible cancellation policy</li>
            <li>The price will not be applicable for peak season.</li>
          </ul>
        </div>
      </div>

      {/* Modal Section */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
            <h2 className="text-2xl font-semibold mb-6">Confirm Your Booking</h2>
            <form onSubmit={handleSubmit}>
              {/* Form fields */}
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none"
                  required
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Date of Departure</label>
                <input
                  type="date"
                  name="departureDate"
                  value={formData.departureDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none"
                  required
                />
              </div>
              {/* Modal buttons */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-gray-400 text-white px-4 py-2 rounded-md mr-2 hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackageDetails;
