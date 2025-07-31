import React from "react";

const TrainList = ({ trains, selectedTrain, onSelectTrain }) => {
  return (
    <div className="py-8 bg-gradient-to-r from-gray-100 to-blue-50">
      <div className="container mx-auto max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">Available Trains</h2>
        <div className="space-y-4">
          {trains.length > 0 ? (
            trains.map((train) => (
              <div
                key={train.id}
                className={`p-4 rounded-lg cursor-pointer border transition-transform transform hover:scale-105 hover:shadow-md ${
                  selectedTrain?.id === train.id
                    ? "bg-blue-100 border-blue-600"
                    : "bg-gray-50 border-gray-300"
                }`}
                onClick={() => onSelectTrain(train)}
              >
                <h3 className="font-semibold text-lg text-gray-800">{train.name}</h3>
                <p className="text-sm text-gray-600">
                  Seats Available:{" "}
                  <span
                    className={`font-bold ${
                      train.seats > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {train.seats}
                  </span>
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 font-medium">No trains available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrainList;
