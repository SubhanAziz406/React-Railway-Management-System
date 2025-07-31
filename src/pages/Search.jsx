import React, { useState, useEffect } from "react";
import { getStations, searchTrains } from "../config"; // Import functions from config/index.js

const Search = () => {
  const [stations, setStations] = useState([]);
  const [searchParams, setSearchParams] = useState({
    departure: "",
    arrival: "",
  });
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Fetch stations from the backend
  useEffect(() => {
    const fetchStations = async () => {
      try {
        const response = await getStations();
        setStations(response.data);
      } catch (err) {
        setErrors({ api: "Failed to fetch stations. Please try again." });
      }
    };

    fetchStations();
  }, []);

  // Search function
  const handleSearch = async () => {
    if (!searchParams.departure || !searchParams.arrival) {
      alert("Please select both departure and arrival stations.");
      return;
    }

    setIsLoading(true);
    try {
      // Fetch trains matching the search parameters
      const response = await searchTrains(searchParams);
      setResults(response.data);

      if (response.data.length === 0) {
        alert("No trains found for the selected route.");
      }
    } catch (err) {
      setErrors({ api: err.response?.data?.message || "Failed to search trains." });
    } finally {
      setIsLoading(false);
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
          <h2 className="text-xl font-semibold mb-4 text-center">
            Search for Trains
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <select
              className="p-3 border border-gray-300 rounded"
              value={searchParams.departure}
              onChange={(e) =>
                setSearchParams({ ...searchParams, departure: e.target.value })
              }
            >
              <option value="">Select Departure Station</option>
              {stations.map((station) => (
                <option key={station._id} value={station.name}>
                  {station.name}
                </option>
              ))}
            </select>
            <select
              className="p-3 border border-gray-300 rounded"
              value={searchParams.arrival}
              onChange={(e) =>
                setSearchParams({ ...searchParams, arrival: e.target.value })
              }
            >
              <option value="">Select Arrival Station</option>
              {stations.map((station) => (
                <option key={station._id} value={station.name}>
                  {station.name}
                </option>
              ))}
            </select>
          </div>
          <button onClick={handleSearch} className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded">
            {isLoading ? "Searching..." : "Search"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
