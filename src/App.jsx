import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

// Pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Booking from "./pages/Booking";
import Profile from "./pages/Profile";
import Services from "./pages/Services";
import Search from "./pages/Search";

// Scroll to Top Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// ProtectedRoute Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("authToken");
  return token ? children : <Navigate to="/Login" />;
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Check for auth and admin tokens in localStorage
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const adminStatus = localStorage.getItem("isAdmin") === "true"; // Assuming admin status is saved in localStorage
    setIsLoggedIn(!!token);
    setIsAdmin(adminStatus);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <>
              <Helmet>
                <title>Home - Railway Management System</title>
                <meta name="description" content="Manage train bookings and schedules with ease." />
              </Helmet>
              <Home />
            </>
          }
        />
        <Route
          path="/Login"
          element={
            <>
              <Helmet>
                <title>Login - Railway Management System</title>
                <meta name="description" content="Login to access your account and manage bookings." />
              </Helmet>
              <Login setIsLoggedIn={setIsLoggedIn} />
            </>
          }
        />
        <Route
          path="/Register"
          element={
            <>
              <Helmet>
                <title>Register - Railway Management System</title>
                <meta name="description" content="Register an account to book tickets and view schedules." />
              </Helmet>
              <Register setIsLoggedIn={setIsLoggedIn} />
            </>
          }
        />
        <Route
          path="/Booking"
          element={
            <>
              <Helmet>
                <title>Booking - Railway Management System</title>
                <meta name="description" content="Book tickets and manage your train journey." />
              </Helmet>
              <Booking />
            </>
          }
        />
        <Route
          path="/Services"
          element={
            <>
              <Helmet>
                <title>Services - Railway Management System</title>
                <meta name="description" content="Explore services like ticket booking, train schedules, and more." />
              </Helmet>
              <Services />
            </>
          }
        />
        <Route
          path="/Search"
          element={
            <>
              <Helmet>
                <title>Search - Railway Management System</title>
                <meta name="description" content="Search for trains between stations and plan your journey." />
              </Helmet>
              <Search />
            </>
          }
        />

        {/* Protected Routes */}
        <Route
          path="/Dashboard"
          element={
            <ProtectedRoute>
              <>
                <Helmet>
                  <title>Dashboard - Railway Management System</title>
                  <meta name="description" content="View your bookings and travel history." />
                </Helmet>
                <Dashboard />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/Profile"
          element={
            <ProtectedRoute>
              <>
                <Helmet>
                  <title>Profile - Railway Management System</title>
                  <meta name="description" content="Manage your profile and view booking history." />
                </Helmet>
                <Profile />
              </>
            </ProtectedRoute>
          }
        />
        {isAdmin && (
          <Route
            path="/Admin"
            element={
              <ProtectedRoute>
                <>
                  <Helmet>
                    <title>Admin Dashboard - Railway Management System</title>
                    <meta name="description" content="Admin tools to manage trains, schedules, and users." />
                  </Helmet>
                  <Admin />
                </>
              </ProtectedRoute>
            }
          />
        )}

        {/* Catch-All Route */}
        <Route
          path="*"
          element={
            <>
              <Helmet>
                <title>404 - Page Not Found</title>
                <meta name="description" content="The page you are looking for does not exist." />
              </Helmet>
              <NotFound />
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;