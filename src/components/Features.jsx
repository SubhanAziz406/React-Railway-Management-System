import React from 'react';
import { FaTicketAlt, FaTrain, FaMapMarkedAlt } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaTicketAlt size={30} />,
      title: 'Easy Ticket Booking',
      description: 'Book your tickets easily with our user-friendly platform, designed for a seamless experience.',
    },
    {
      icon: <FaTrain size={30} />,
      title: 'Live Train Tracking',
      description: 'Track train schedules in real-time and get updates on arrival and departure times.',
    },
    {
      icon: <FaMapMarkedAlt size={30} />,
      title: 'Explore Destinations',
      description: 'Discover new destinations and plan your trips with ease using our travel guides.',
    },
  ];

  return (
    <div id="features" className="py-10 bg-blue-50">
      <h2 className="text-4xl font-bold text-center mb-8">Key Features</h2>
      <div className="flex flex-wrap justify-center space-x-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="max-w-xs bg-white rounded-lg shadow-lg p-6 m-4 text-center transform hover:scale-105 transition-transform duration-300"
          >
            <div className="text-blue-500 mb-4">{feature.icon}</div>
            <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
