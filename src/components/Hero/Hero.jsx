import React, { useState } from "react";
import { Search } from "lucide-react";
import packages from "../Packages/PackageData"; // Import your package data
import destinations from "../Destinations/DestinationData"; // Import your destination data

const Hero = () => {
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    // Convert input location to lowercase for case-insensitive matching
    const locationLower = location.trim().toLowerCase();

    // Check for a match in the packages data
    const matchedPackage = packages.find(
      (pack) => pack.location.toLowerCase() === locationLower
    );

    // Check for a match in the destinations data
    const matchedDestination = destinations.find(
      (dest) => dest.location.toLowerCase() === locationLower
    );

    if (matchedPackage) {
      // Open the package details page in a new tab
      const packageUrl = `/packages/${matchedPackage.id}`;
      window.open(packageUrl, "_blank");
    } else if (matchedDestination) {
      // Open the destination details page in a new tab
      const destinationUrl = `/destinations/${matchedDestination.id}`;
      window.open(destinationUrl, "_blank");
    } else {
      alert("Location not found!");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(); // Trigger search on Enter key
    }
  };

  return (
    <div id="home" className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/HeroBG.png')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl mb-8">
            Explore the world's most beautiful destinations with us
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center bg-white rounded-lg p-2">
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onKeyDown={handleKeyDown} // Listen for Enter key press
                placeholder="Where do you want to go?"
                className="flex-1 px-4 py-2 text-gray-800 focus:outline-none"
              />
              <button
                onClick={handleSearch}
                className="bg-blue-600 text-white px-6 py-2 rounded-md flex items-center"
              >
                <Search className="w-5 h-5 mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
