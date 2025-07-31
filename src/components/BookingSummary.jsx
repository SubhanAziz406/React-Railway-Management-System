import React from "react";

const BookingSummary = ({ bookingDetails }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-8 text-center">
      <h2 className="text-2xl font-semibold text-green-600 mb-4">
        Booking Confirmed!
      </h2>

      <div className="space-y-4">
        <p className="text-lg">
          <span className="font-medium text-gray-700">Passenger: </span>
          <span className="font-bold text-gray-900">
            {bookingDetails.passengerName}
          </span>
        </p>
        <p className="text-lg">
          <span className="font-medium text-gray-700">Train: </span>
          <span className="font-bold text-gray-900">
            {bookingDetails.train}
          </span>
        </p>
        <p className="text-lg">
          <span className="font-medium text-gray-700">Tickets: </span>
          <span className="font-bold text-gray-900">
            {bookingDetails.tickets}
          </span>
        </p>
        <p className="text-lg">
          <span className="font-medium text-gray-700">Route: </span>
          <span className="font-bold text-gray-900">
            {bookingDetails.departure} to {bookingDetails.arrival}
          </span>
        </p>
      </div>

      <div className="mt-6">
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Print Ticket
        </button>
      </div>
    </div>
  );
};

export default BookingSummary;
