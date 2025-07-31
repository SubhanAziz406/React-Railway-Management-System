import React from "react";
import PropTypes from "prop-types";

const ErrorHandling = ({ errorMessage, onRetry }) => {
  return (
    <div className="max-w-md mx-auto bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-6" role="alert">
      <strong className="font-bold">Error: </strong>
      <span className="block sm:inline">{errorMessage}</span>
      {onRetry && (
        <button
          onClick={onRetry}
          className="ml-4 mt-2 sm:mt-0 bg-red-500 text-white font-medium px-4 py-1 rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
        >
          Retry
        </button>
      )}
    </div>
  );
};

ErrorHandling.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  onRetry: PropTypes.func,
};

ErrorHandling.defaultProps = {
  onRetry: null,
};

export default ErrorHandling;
