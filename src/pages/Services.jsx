import React from "react";

const Services = () => {
  const services = [
    {
      title: "Online Ticket Booking",
      description:
        "Easily book your train tickets online with real-time availability. Choose your preferred seat and enjoy a hassle-free journey.",
      icon: "🎟️",
    },
    {
      title: "Cargo Services",
      description:
        "Transport your goods safely and efficiently using our reliable cargo services, available across major cities in Pakistan.",
      icon: "🚚",
    },
    {
      title: "Train Schedules",
      description:
        "Stay updated with the latest train schedules and plan your trips accordingly. Accurate timings ensure you never miss your train.",
      icon: "📅",
    },
    {
      title: "Customer Support",
      description:
        "Our 24/7 customer support is here to assist you with queries, bookings, and travel-related information.",
      icon: "☎️",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          Our Services
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Explore the range of services we offer to make your railway experience smooth and convenient.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              <div className="text-5xl mb-4 text-blue-500 text-center">
                {service.icon}
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
                {service.title}
              </h2>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
