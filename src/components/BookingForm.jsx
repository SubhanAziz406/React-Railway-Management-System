import React, { useState } from "react";

const BookingForm = ({ selectedTrain, stations, onConfirmBooking }) => {
  const [passengerName, setPassengerName] = useState("");
  const [tickets, setTickets] = useState(1);
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [error, setError] = useState("");

  const handleBooking = () => {
    if (!passengerName || !departure || !arrival || tickets < 1) {
      setError("Please fill in all fields correctly.");
      return;
    }

    if (departure === arrival) {
      setError("Departure and arrival stations cannot be the same.");
      return;
    }

    if (tickets > selectedTrain.seats) {
      setError("Not enough seats available.");
      return;
    }

    setError("");
    onConfirmBooking({
      train: selectedTrain.name,
      passengerName,
      tickets,
      departure,
      arrival,
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">
        Booking Details for {selectedTrain.name}
      </h2>
      {error && (
        <p className="text-red-600 text-sm mb-4" role="alert">
          {error}
        </p>
      )}
      <div className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="passengerName" className="text-gray-700 font-medium">
            Passenger Name
          </label>
          <input
            id="passengerName"
            type="text"
            value={passengerName}
            onChange={(e) => setPassengerName(e.target.value)}
            placeholder="Enter your name"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="departure" className="text-gray-700 font-medium">
            Departure Station
          </label>
          <select
            id="departure"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Departure Station</option>
            {stations.map((station, index) => (
              <option key={index} value={station}>
                {station}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="arrival" className="text-gray-700 font-medium">
            Arrival Station
          </label>
          <select
            id="arrival"
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Arrival Station</option>
            {stations.map((station, index) => (
              <option key={index} value={station}>
                {station}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="tickets" className="text-gray-700 font-medium">
            Tickets
          </label>
          <input
            id="tickets"
            type="number"
            value={tickets}
            onChange={(e) => setTickets(Number(e.target.value))}
            min="1"
            max={selectedTrain.seats}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <small className="text-gray-500">Available seats: {selectedTrain.seats}</small>
        </div>
        <button
          onClick={handleBooking}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
