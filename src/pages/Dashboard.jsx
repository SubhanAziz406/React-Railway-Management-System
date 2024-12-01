import React, { useState } from "react";

const Dashboard = () => {
  // Static data for user stats
  const userStats = {
    totalBookings: 5,
    upcomingTrips: 2,
    completedTrips: 3,
  };

  // Static data for bookings
  const bookings = [
    {
      train: "Green Line Express",
      departure: "Karachi",
      arrival: "Lahore",
      date: "2024-11-28",
      tickets: 2,
      price: 5000,
      status: "Upcoming",
    },
    {
      train: "Karachi Express",
      departure: "Lahore",
      arrival: "Islamabad",
      date: "2024-11-25",
      tickets: 1,
      price: 3000,
      status: "Upcoming",
    },
    {
      train: "Allama Iqbal Express",
      departure: "Rawalpindi",
      arrival: "Karachi",
      date: "2024-11-20",
      tickets: 4,
      price: 8000,
      status: "Completed",
    },
  ];

  const [bookingDetails, setBookingDetails] = useState(null);

  // View booking details
  const handleViewDetails = (booking) => {
    setBookingDetails(booking);
  };

  // Close details modal
  const closeDetails = () => {
    setBookingDetails(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Welcome to Your Dashboard
      </h1>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* User Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow rounded">
            <h3 className="text-lg font-bold">Total Bookings</h3>
            <p className="text-2xl text-blue-600">{userStats.totalBookings}</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h3 className="text-lg font-bold">Upcoming Trips</h3>
            <p className="text-2xl text-green-600">{userStats.upcomingTrips}</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h3 className="text-lg font-bold">Completed Trips</h3>
            <p className="text-2xl text-gray-600">{userStats.completedTrips}</p>
          </div>
        </div>

        {/* Bookings Table */}
        <div className="bg-white p-6 shadow rounded">
          <h2 className="text-2xl font-bold mb-4">Your Bookings</h2>
          {bookings.length > 0 ? (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 border">Train</th>
                  <th className="p-2 border">From</th>
                  <th className="p-2 border">To</th>
                  <th className="p-2 border">Date</th>
                  <th className="p-2 border">Tickets</th>
                  <th className="p-2 border">Status</th>
                  <th className="p-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="p-2 border">{booking.train}</td>
                    <td className="p-2 border">{booking.departure}</td>
                    <td className="p-2 border">{booking.arrival}</td>
                    <td className="p-2 border">{booking.date}</td>
                    <td className="p-2 border">{booking.tickets}</td>
                    <td
                      className={`p-2 border ${
                        booking.status === "Upcoming"
                          ? "text-green-600"
                          : "text-gray-600"
                      }`}
                    >
                      {booking.status}
                    </td>
                    <td className="p-2 border">
                      <button
                        onClick={() => handleViewDetails(booking)}
                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 mr-2"
                      >
                        View
                      </button>
                      {booking.status === "Upcoming" && (
                        <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                          Cancel
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No bookings found.</p>
          )}
        </div>
      </div>

      {/* Booking Details Modal */}
      {bookingDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Booking Details</h2>
            <p>
              <span className="font-bold">Train:</span> {bookingDetails.train}
            </p>
            <p>
              <span className="font-bold">From:</span>{" "}
              {bookingDetails.departure}
            </p>
            <p>
              <span className="font-bold">To:</span> {bookingDetails.arrival}
            </p>
            <p>
              <span className="font-bold">Date:</span> {bookingDetails.date}
            </p>
            <p>
              <span className="font-bold">Tickets:</span>{" "}
              {bookingDetails.tickets}
            </p>
            <p>
              <span className="font-bold">Price:</span> Rs.{" "}
              {bookingDetails.price}
            </p>
            <p>
              <span className="font-bold">Status:</span>{" "}
              {bookingDetails.status}
            </p>
            <button
              onClick={closeDetails}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
