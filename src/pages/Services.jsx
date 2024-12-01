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
    <div className="min-h-screen bg-gray-100">
      <div className="container px-4 py-8 mx-auto">
        <h1 className="mb-6 text-3xl font-bold text-center text-blue-600">
          Our Services
        </h1>
        <p className="mb-10 text-center text-gray-700">
          Explore the range of services we offer to make your railway experience smooth and convenient.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 text-4xl text-blue-500">{service.icon}</div>
              <h2 className="mb-2 text-xl font-bold text-gray-800">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
