import React, { useState } from "react";

const Search = () => {
  // Hardcoded stations and train data
  const stations = [
    { id: 1, name: "Karachi" },
    { id: 2, name: "Lahore" },
    { id: 3, name: "Islamabad" },
    { id: 4, name: "Quetta" },
    { id: 5, name: "Peshawar" },
  ];

  const trains = [
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
    {
      id: 3,
      name: "Bolan Express",
      departure: "Quetta",
      arrival: "Karachi",
      time: "09:00 AM",
    },
    {
      id: 4,
      name: "Khyber Mail",
      departure: "Peshawar",
      arrival: "Karachi",
      time: "05:00 PM",
    },
  ];

  const [searchParams, setSearchParams] = useState({
    departure: "",
    arrival: "",
  });

  const [results, setResults] = useState([]);

  // Search function
  const handleSearch = () => {
    if (!searchParams.departure || !searchParams.arrival) {
      alert("Please select both departure and arrival stations.");
      return;
    }

    const filteredTrains = trains.filter(
      (train) =>
        train.departure === searchParams.departure &&
        train.arrival === searchParams.arrival
    );

    setResults(filteredTrains);

    if (filteredTrains.length === 0) {
      alert("No trains found for the selected route.");
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Search Trains
      </h1>
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-6">
        {/* Search Form */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Search for Trains</h2>
          <div className="grid grid-cols-2 gap-4">
            <select
              className="p-2 border border-gray-300 rounded"
              value={searchParams.departure}
              onChange={(e) =>
                setSearchParams({ ...searchParams, departure: e.target.value })
              }
            >
              <option value="">Select Departure Station</option>
              {stations.map((station) => (
                <option key={station.id} value={station.name}>
                  {station.name}
                </option>
              ))}
            </select>
            <select
              className="p-2 border border-gray-300 rounded"
              value={searchParams.arrival}
              onChange={(e) =>
                setSearchParams({ ...searchParams, arrival: e.target.value })
              }
            >
              <option value="">Select Arrival Station</option>
              {stations.map((station) => (
                <option key={station.id} value={station.name}>
                  {station.name}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={handleSearch}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Search
          </button>
        </div>

        {/* Results Section */}
        {results.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Search Results</h2>
            <ul className="space-y-4">
              {results.map((train) => (
                <li
                  key={train.id}
                  className="p-4 bg-gray-100 rounded shadow flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-lg font-bold text-blue-700">
                      {train.name}
                    </h3>
                    <p>
                      Departure:{" "}
                      <span className="text-gray-700">{train.departure}</span>
                    </p>
                    <p>
                      Arrival:{" "}
                      <span className="text-gray-700">{train.arrival}</span>
                    </p>
                    <p>
                      Time: <span className="text-gray-700">{train.time}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
