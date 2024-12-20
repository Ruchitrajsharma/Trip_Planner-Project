import React, { useState } from "react";
import { useParams } from "react-router-dom";
import destinations from "./DestinationData";
import { FaBuilding, FaCar, FaUtensils, FaHiking } from "react-icons/fa";

const DestinationDetails = () => {
    const { id } = useParams();
    const destinationDetails = destinations.find(
        (destination) => destination.id === parseInt(id, 10)
    );
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: "",
        departureDate: "",
    });

    if (!destinationDetails) {
        return (
            <div className="text-center text-gray-600 mt-20">
                Search for Other Destination
            </div>
        );
    }

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
        alert("Booking Confirmed!");
        handleCloseModal();
    };

    return (
        <div className="pt-20 max-w-6xl mx-auto p-8 flex flex-col md:flex-row">
            {/* Image and Package Includes */}
            <div className="w-full md:w-1/2 h-auto flex flex-col">
                <div className="h-[45vh]">
                    <img
                        src={destinationDetails.image}
                        alt={destinationDetails.title}
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold mb-4">Package Includes</h2>
                    <ul className="flex space-x-6">
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

            {/* Details and Modal */}
            <div className="w-full md:w-1/2 flex flex-col justify-between md:pl-8">
                <div>
                    <h1 className="text-4xl font-bold mb-6">{destinationDetails.title}</h1>
                    <p className="text-gray-600 mb-4 text-xl">{destinationDetails.location}</p>
                    <p className="text-lg mb-6">{destinationDetails.description}</p>
                    <p className="text-2xl font-bold text-blue-600 mb-6">
                        ₹{destinationDetails.price}
                    </p>
                    <button
                        onClick={handleOpenModal}
                        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
                    >
                        Book Now
                    </button>
                </div>
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

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
                        <h2 className="text-2xl font-semibold mb-6">Confirm Your Booking</h2>
                        <form onSubmit={handleSubmit}>
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

export default DestinationDetails;
