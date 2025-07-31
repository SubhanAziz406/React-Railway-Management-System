import React from "react";

const Stats = () => {
  const stats = [
    { label: "Daily Passengers", value: "500K+" },
    { label: "Active Trains", value: "120+" },
    { label: "Bookings Made", value: "1M+" },
    { label: "Destinations Covered", value: "20+" }, // Added an extra stat for variety
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 via-white to-gray-100">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-10">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-5xl font-bold text-blue-600">{stat.value}</h3>
              <p className="mt-2 text-lg font-medium text-gray-700">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
