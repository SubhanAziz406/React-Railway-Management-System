import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { loginUser } from "../config"; // Import the loginUser function

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required.";
    if (!formData.password) newErrors.password = "Password is required.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setIsLoading(true); // Show loading indicator
      try {
        const response = await loginUser({
          email: formData.email,
          password: formData.password,
        });

        const token = response.data.token;
        localStorage.setItem("authToken", token); // Store the token for subsequent requests
        
        alert("Login Successful!");

        navigate("/Dashboard"); // ✅ Use useNavigate to redirect

      } catch (err) {
        setErrors({ api: err.response?.data?.message || "Login failed." });
      } finally {
        setIsLoading(false); // Hide loading indicator
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-600">{errors.password}</p>
            )}
          </div>
          {errors.api && (
            <p className="mt-1 text-sm text-center text-red-600">
              {errors.api}
            </p>
          )}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full px-4 py-2 text-sm font-bold text-white rounded-md ${
              isLoading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
            } focus:outline-none focus:ring-2 focus:ring-blue-400`}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
