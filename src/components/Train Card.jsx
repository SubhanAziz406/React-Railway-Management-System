import React from "react";
import { FaTrain, FaBolt, FaLeaf } from "react-icons/fa";

const TrainCard = ({ trains = [] }) => {
    if (!trains.length) {
      return <div>No trains available.</div>;
    }
  
    const trainIcons = {
      "Express": <FaBolt size={40} className="text-red-500" />,
      "Passenger": <FaTrain size={40} className="text-blue-500" />,
      "Eco-Friendly": <FaLeaf size={40} className="text-green-500" />,
    };
  
    return (
      <div className="py-16 bg-gradient-to-r from-gray-100 to-blue-50">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Our Train Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {trains.map((train, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center transition-transform transform hover:scale-105"
              >
                <div className="mb-6">{trainIcons[train.type]}</div>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">{train.name}</h3>
                <p className="text-lg text-gray-600 mb-4">{train.description}</p>
                <div className="text-sm text-gray-500">
                  <p><strong>Max Speed:</strong> {train.maxSpeed} km/h</p>
                  <p><strong>Capacity:</strong> {train.capacity} passengers</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  

export default TrainCard;
