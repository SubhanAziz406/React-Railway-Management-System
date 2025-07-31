import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const [stations, setStations] = useState([
    { id: 1, name: "Karachi", code: "KHI" },
    { id: 2, name: "Lahore", code: "LHE" },
    { id: 3, name: "Islamabad", code: "ISB" },
  ]);
  const [trains, setTrains] = useState([
    {
      id: 1,
      name: "Green Line Express",
      departure: "Karachi",
      arrival: "Lahore",
      time: "08:00 AM",
    },
    {
      id: 2,
      name: "Karachi Express",
      departure: "Lahore",
      arrival: "Islamabad",
      time: "06:00 PM",
    },
  ]);
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ]);

  const [newStation, setNewStation] = useState({ name: "", code: "" });
  const [newTrain, setNewTrain] = useState({
    name: "",
    departure: "",
    arrival: "",
    time: "",
  });

  // Admin Authorization
  useEffect(() => {
    const authToken = localStorage.getItem("adminAuthToken");

    if (!authToken || authToken !== "your-admin-secret-key") {
      alert("Unauthorized Access. Redirecting to Login.");
      navigate("/login");
    }
  }, [navigate]);

  // Add Station
  const addStation = () => {
    if (!newStation.name || !newStation.code) {
      alert("Please fill in all fields for the station.");
      return;
    }
    setStations([
      ...stations,
      { id: stations.length + 1, name: newStation.name, code: newStation.code },
    ]);
    setNewStation({ name: "", code: "" });
    alert("Station added successfully!");
  };

  // Add Train
  const addTrain = () => {
    if (!newTrain.name || !newTrain.departure || !newTrain.arrival || !newTrain.time) {
      alert("Please fill in all fields for the train.");
      return;
    }
    setTrains([
      ...trains,
      { id: trains.length + 1, ...newTrain },
    ]);
    setNewTrain({ name: "", departure: "", arrival: "", time: "" });
    alert("Train added successfully!");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Admin Dashboard
      </h1>
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-6">
        {/* Dashboard Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-blue-100 rounded shadow">
            <h2 className="text-xl font-semibold text-blue-700">Total Stations</h2>
            <p className="text-3xl font-bold text-blue-800">{stations.length}</p>
          </div>
          <div className="p-4 bg-green-100 rounded shadow">
            <h2 className="text-xl font-semibold text-green-700">Total Trains</h2>
            <p className="text-3xl font-bold text-green-800">{trains.length}</p>
          </div>
          <div className="p-4 bg-yellow-100 rounded shadow">
            <h2 className="text-xl font-semibold text-yellow-700">Total Users</h2>
            <p className="text-3xl font-bold text-yellow-800">{users.length}</p>
          </div>
        </div>

        {/* Manage Stations */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Manage Stations</h2>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Station Name"
              value={newStation.name}
              onChange={(e) =>
                setNewStation({ ...newStation, name: e.target.value })
              }
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Station Code"
              value={newStation.code}
              onChange={(e) =>
                setNewStation({ ...newStation, code: e.target.value })
              }
              className="p-2 border border-gray-300 rounded"
            />
            <button
              onClick={addStation}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add Station
            </button>
          </div>
          <ul className="mt-4 list-disc list-inside">
            {stations.map((station) => (
              <li key={station.id}>
                {station.name} ({station.code})
              </li>
            ))}
          </ul>
        </div>

        {/* Manage Trains */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Manage Trains</h2>
          <div className="grid grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Train Name"
              value={newTrain.name}
              onChange={(e) =>
                setNewTrain({ ...newTrain, name: e.target.value })
              }
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Departure Station"
              value={newTrain.departure}
              onChange={(e) =>
                setNewTrain({ ...newTrain, departure: e.target.value })
              }
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Arrival Station"
              value={newTrain.arrival}
              onChange={(e) =>
                setNewTrain({ ...newTrain, arrival: e.target.value })
              }
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="time"
              value={newTrain.time}
              onChange={(e) =>
                setNewTrain({ ...newTrain, time: e.target.value })
              }
              className="p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            onClick={addTrain}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Add Train
          </button>
          <ul className="mt-4 list-disc list-inside">
            {trains.map((train) => (
              <li key={train.id}>
                {train.name} (From: {train.departure} - To: {train.arrival} at{" "}
                {train.time})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admin;
