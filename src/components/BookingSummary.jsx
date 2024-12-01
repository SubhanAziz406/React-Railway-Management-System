import React from "react";

const BookingSummary = ({ bookingDetails }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 text-center">
      <h2 className="text-2xl font-semibold text-green-600 mb-4">
        Booking Confirmed!
      </h2>
      <p className="text-lg">
        Passenger: <span className="font-bold">{bookingDetails.passengerName}</span>
      </p>
      <p className="text-lg">
        Train: <span className="font-bold">{bookingDetails.train}</span>
      </p>
      <p className="text-lg">
        Tickets: <span className="font-bold">{bookingDetails.tickets}</span>
      </p>
      <p className="text-lg">
        Route:{" "}
        <span className="font-bold">
          {bookingDetails.departure} to {bookingDetails.arrival}
        </span>
      </p>
    </div>
  );
};

export default BookingSummary;
