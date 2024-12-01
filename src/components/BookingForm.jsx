import React, { useState } from "react";

const BookingForm = ({ selectedTrain, stations, onConfirmBooking }) => {
  const [passengerName, setPassengerName] = useState("");
  const [tickets, setTickets] = useState(1);
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");

  const handleBooking = () => {
    if (!passengerName || !departure || !arrival || tickets < 1) {
      alert("Please fill in all fields.");
      return;
    }

    if (departure === arrival) {
      alert("Departure and arrival stations cannot be the same.");
      return;
    }

    if (tickets > selectedTrain.seats) {
      alert("Not enough seats available.");
      return;
    }

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
      <h2 className="text-2xl font-semibold mb-4">
        Booking Details for {selectedTrain.name}
      </h2>
      <div className="space-y-4">
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Passenger Name</label>
          <input
            type="text"
            value={passengerName}
            onChange={(e) => setPassengerName(e.target.value)}
            placeholder="Enter your name"
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Departure Station</label>
          <select
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            className="p-2 border border-gray-300 rounded"
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
          <label className="text-gray-700 font-medium">Arrival Station</label>
          <select
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
            className="p-2 border border-gray-300 rounded"
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
          <label className="text-gray-700 font-medium">Tickets</label>
          <input
            type="number"
            value={tickets}
            onChange={(e) => setTickets(Number(e.target.value))}
            min="1"
            max={selectedTrain.seats}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          onClick={handleBooking}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
