import React, { useState, useEffect } from "react";
import { getStations, getTrains, createBooking } from "../config"; // Import functions from config/index.js

const Booking = () => {
  const [formData, setFormData] = useState({
    train: "",
    departure: "",
    arrival: "",
    date: "",
    tickets: 1,
  });
  const [stations, setStations] = useState([]); // Stations fetched from the backend
  const [trains, setTrains] = useState([]); // Trains fetched from the backend
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state for form submission

  // Fetch stations and trains from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch stations
        const stationsResponse = await getStations();
        setStations(stationsResponse.data);

        // Fetch trains
        const trainsResponse = await getTrains(); // Use getTrains instead of getAllTrains
        setTrains(trainsResponse.data);
      } catch (err) {
        setErrors({ api: "Failed to fetch data. Please try again." });
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.train || !formData.departure || !formData.arrival || !formData.date || !formData.tickets) {
      alert("Please fill in all fields.");
      return;
    }

    setIsLoading(true); // Show loading indicator
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        alert("Please log in to book a ticket.");
        return;
      }

      // Send booking data to the backend
      await createBooking(formData);

      // Handle success
      setSuccessMessage("Booking successful!");
      setFormData({ train: "", departure: "", arrival: "", date: "", tickets: 1 });
      setErrors({});
    } catch (err) {
      setErrors({ api: err.response?.data?.message || "Booking failed. Please try again." });
    } finally {
      setIsLoading(false); // Hide loading indicator
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Book a Ticket
      </h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 shadow rounded">
        {/* Train Dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Train</label>
          <select
            name="train"
            value={formData.train}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Select Train</option>
            {trains.map((train) => (
              <option key={train._id} value={train.name}>
                {train.name}
              </option>
            ))}
          </select>
        </div>

        {/* Departure Station Dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">From</label>
          <select
            name="departure"
            value={formData.departure}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Select Departure Station</option>
            {stations.map((station) => (
              <option key={station._id} value={station.name}>
                {station.name}
              </option>
            ))}
          </select>
        </div>

        {/* Arrival Station Dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">To</label>
          <select
            name="arrival"
            value={formData.arrival}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Select Arrival Station</option>
            {stations.map((station) => (
              <option key={station._id} value={station.name}>
                {station.name}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full px-4 py-2 text-sm font-bold text-white rounded-md ${
            isLoading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
          } focus:outline-none focus:ring-2 focus:ring-blue-400`}
        >
          {isLoading ? "Booking..." : "Book Now"}
        </button>
      </form>
    </div>
  );
};

export default Booking;
