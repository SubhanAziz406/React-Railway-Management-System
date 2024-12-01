import React, { useState } from "react";
import TrainList from "../components/TrainList";
import BookingForm from "../components/BookingForm";
import BookingSummary from "../components/BookingSummary";

const Booking = () => {
  // List of Pakistan Railway stations
  const stations = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Rawalpindi",
    "Peshawar",
    "Quetta",
    "Multan",
    "Faisalabad",
    "Hyderabad",
    "Sukkur",
  ];

  // Dummy train data
  const [trains, setTrains] = useState([
    { id: 1, name: "Green Line Express", seats: 50 },
    { id: 2, name: "Karachi Express", seats: 60 },
    { id: 3, name: "Tezgam Express", seats: 40 },
  ]);

  const [selectedTrain, setSelectedTrain] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleTrainSelect = (train) => {
    setSelectedTrain(train);
  };

  const handleBookingConfirm = (details) => {
    // Reduce seat count
    const updatedTrains = trains.map((train) =>
      train.id === selectedTrain.id
        ? { ...train, seats: train.seats - details.tickets }
        : train
    );
    setTrains(updatedTrains);
    setBookingDetails(details);
    setSelectedTrain(null); // Clear train selection
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Railway Booking System
      </h1>
      {!bookingDetails ? (
        <>
          <TrainList
            trains={trains}
            selectedTrain={selectedTrain}
            onSelectTrain={handleTrainSelect}
          />
          {selectedTrain && (
            <BookingForm
              selectedTrain={selectedTrain}
              stations={stations}
              onConfirmBooking={handleBookingConfirm}
            />
          )}
        </>
      ) : (
        <BookingSummary bookingDetails={bookingDetails} />
      )}
    </div>
  );
};

export default Booking;
