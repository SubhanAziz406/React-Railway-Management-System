import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./components/NotFound";
import Booking from "./pages/Booking"; 
import Profile from "./pages/Profile"; 
import Services from "./pages/Services"; 
import Search from "./pages/Search"; 

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check for an auth token in localStorage
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Search" element={<Search />} />

        {/* Protected Routes */}
        {isLoggedIn ? (
          <>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Profile" element={<Profile />} />
            
          </>
        ) : (
          <Route path="*" element={<Navigate to="/Login" />} />
        )}

        {/* Catch-All */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
