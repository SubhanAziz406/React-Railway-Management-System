import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  // Handle Logout
  const handleLogout = () => {
    // Clear session or token logic (Will be implemented in the backend)
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    navigate("/login"); // Redirect to login
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <div>
        <Link to="/" className="text-xl font-bold">
          Railway Management
        </Link>
      </div>

      {/* Links */}
      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/Booking" className="hover:underline">
          Book Your Ticket
        </Link>
        <Link to="/Services" className="hover:underline">
          Services
        </Link><Link to="/Search" className="hover:underline">
          Search
        </Link>


        {isLoggedIn && (
          <>
            <Link to="/dashboard" className="hover:underline">
              Dashboard
            </Link>
            <Link to="/Profile" className="hover:underline">
              Profile
            </Link>
            <Link to="/admin" className="hover:underline">
              Admin
            </Link>
          </>
        )}
        {!isLoggedIn && (
          <>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/register" className="hover:underline">
              Register
            </Link>
          </>
        )}
      </div>

      {/* Auth Button */}
      {isLoggedIn && (
        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-500"
        >
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;
