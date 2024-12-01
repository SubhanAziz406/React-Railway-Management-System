import React from "react";

const TrainList = ({ trains, selectedTrain, onSelectTrain }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4">Available Trains</h2>
      <div className="space-y-4">
        {trains.map((train) => (
          <div
            key={train.id}
            className={`border p-4 rounded cursor-pointer ${
              selectedTrain?.id === train.id
                ? "bg-blue-100 border-blue-600"
                : "border-gray-300"
            }`}
            onClick={() => onSelectTrain(train)}
          >
            <p className="font-medium text-lg">{train.name}</p>
            <p>
              Seats Available:{" "}
              <span
                className={`font-semibold ${
                  train.seats > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {train.seats}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainList;
