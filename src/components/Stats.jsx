import React from 'react';

const Stats = () => {
  const stats = [
    { label: 'Daily Passengers', value: '500K+' },
    { label: 'Active Trains', value: '120+' },
    { label: 'Bookings Made', value: '1M+' },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Achievements</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 w-56 animate-fadeInUp"
            >
              <h3 className="text-4xl font-extrabold text-blue-500">
                {stat.value}
              </h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
