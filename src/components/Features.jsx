import React from 'react';
import { FaTicketAlt, FaTrain, FaMapMarkedAlt } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaTicketAlt size={40} />,
      title: 'Easy Ticket Booking',
      description: 'Book your tickets easily with our user-friendly platform, designed for a seamless experience.',
    },
    {
      icon: <FaTrain size={40} />,
      title: 'Live Train Tracking',
      description: 'Track train schedules in real-time and get updates on arrival and departure times.',
    },
    {
      icon: <FaMapMarkedAlt size={40} />,
      title: 'Explore Destinations',
      description: 'Discover new destinations and plan your trips with ease using our travel guides.',
    },
  ];

  return (
    <div id="features" className="py-12 bg-blue-50">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">
        Key Features
      </h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <div className="text-blue-500 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
