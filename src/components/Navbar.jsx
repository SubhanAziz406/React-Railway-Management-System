import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-4 shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div>
          <Link
            to="/"
            className="text-2xl font-bold hover:text-blue-200 transition"
          >
            Pakistan Railways
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="hover:text-blue-200 transition font-semibold"
          >
            Home
          </Link>
          <Link
            to="/Booking"
            className="hover:text-blue-200 transition font-semibold"
          >
            Book Your Ticket
          </Link>
          <Link
            to="/Services"
            className="hover:text-blue-200 transition font-semibold"
          >
            Services
          </Link>
          <Link
            to="/Search"
            className="hover:text-blue-200 transition font-semibold"
          >
            Search
          </Link>

          {isLoggedIn && (
            <>
              <Link
                to="/dashboard"
                className="hover:text-blue-200 transition font-semibold"
              >
                Dashboard
              </Link>
              <Link
                to="/Profile"
                className="hover:text-blue-200 transition font-semibold"
              >
                Profile
              </Link>
              
            </>
          )}
          {!isLoggedIn && (
            <>
              <Link
                to="/login"
                className="hover:text-blue-200 transition font-semibold"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="hover:text-blue-200 transition font-semibold"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Auth Button */}
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="bg-red-600 px-4 py-2 rounded hover:bg-red-500 transition font-semibold"
          >
            Logout
          </button>
        )}

        {/* Mobile Menu (Hamburger Icon) */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => alert("Mobile Menu - Coming Soon!")}
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
