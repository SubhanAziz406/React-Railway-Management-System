import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero"; // Hero component for the top section
import Features from "../components/Features";
import TicketGuide from "../components/TicketGuide";

import Testimonials from "../components/Testimonials"; // Key Features section



const Home = () => {

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Welcome Section */}
      <main className="container mx-auto mt-8 p-4">


        {/* Features Section */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded shadow p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-800">Manage Schedules</h3>
            <p className="text-gray-600 mt-2">
              View and update train schedules easily.
            </p>
          </div>
          <div className="bg-white rounded shadow p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-800">Book Tickets</h3>
            <p className="text-gray-600 mt-2">
              Reserve your seat in just a few clicks.
            </p>
          </div>
          <div className="bg-white rounded shadow p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-800">Easy to Use</h3>
            <p className="text-gray-600 mt-2">
              Easily access and book your trip.
            </p>
          </div>
        </section>

       


        {/* Features Section */}
        <Features />
        <TicketGuide />
        <Testimonials />

      </main>
    </div>
  );
};

export default Home;
