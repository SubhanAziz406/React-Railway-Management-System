import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
     
      
      <main className="container mx-auto mt-8 p-4">
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Welcome to the Railway Management System</h2>
          <p className="text-gray-600 mt-4">
            Manage train schedules, book tickets, and ensure a smooth experience with our platform.
          </p>
          <div className="mt-6">
            <Link
              to="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-500"
            >
              Get Started
            </Link>
          </div>
        </section>

        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded shadow p-4 text-center">
            <h3 className="text-xl font-bold text-gray-800">Manage Schedules</h3>
            <p className="text-gray-600 mt-2">View and update train schedules easily.</p>
          </div>
          <div className="bg-white rounded shadow p-4 text-center">
            <h3 className="text-xl font-bold text-gray-800">Book Tickets</h3>
            <p className="text-gray-600 mt-2">Reserve your seat in just a few clicks.</p>
          </div>
          <div className="bg-white rounded shadow p-4 text-center">
            <h3 className="text-xl font-bold text-gray-800">Admin Panel</h3>
            <p className="text-gray-600 mt-2">Access advanced tools for managing the system.</p>
          </div>
        </section>
      </main>

   
    </div>
  );
};

export default Home;
