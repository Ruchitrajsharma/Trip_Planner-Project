import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Destinations from "./components/Destinations/Destinations";
import DestinationDetails from "./components/Destinations/DestinationDetails"; // Import DestinationDetails
import Contact from "./components/Contact/Contact";
import Packages from "./components/Packages/Packages";
import PackageDetails from "./components/Packages/PackageDetails";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Destinations />
                <Packages />
                <Contact />
              </>
            }
          />

          {/* Destination Details Page */}
          <Route path="/destinations/:id" element={<DestinationDetails />} />

          {/* Package Details Page */}
          <Route path="/packages/:id" element={<PackageDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
