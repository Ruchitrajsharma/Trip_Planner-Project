import React from 'react';
import { MapPin } from 'lucide-react';

const DestinationCard = ({ id, image, title, location, price }) => {
  const handleClick = () => {
    const destinationUrl = `/destinations/${id}`;
    window.open(destinationUrl,"_blank");
  }
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
      onClick={handleClick}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{location}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-bold">₹{price}</span>
          
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;