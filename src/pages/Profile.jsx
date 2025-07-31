import React, { useState, useEffect } from "react";
import {
  getUserProfile,
  updateUserProfile,
  getUserBookings,
} from "../config"; // Import functions from config/index.js

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    profilePicture: null,
    bookings: [],
  });
  const [isEditing, setIsEditing] = useState(false);
  const [updatedInfo, setUpdatedInfo] = useState({
    name: "",
    email: "",
    password: "",
    profilePicture: null,
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Fetch user profile and booking history from the backend
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Fetch user profile
        const profileResponse = await getUserProfile();
        setUser(profileResponse.data);
        setUpdatedInfo({
          name: profileResponse.data.name,
          email: profileResponse.data.email,
          password: "",
          profilePicture: profileResponse.data.profilePicture,
        });

        // Fetch user bookings
        const bookingsResponse = await getUserBookings();
        setUser((prev) => ({ ...prev, bookings: bookingsResponse.data }));
      } catch (err) {
        setErrors({ api: err.response?.data?.message || "Failed to fetch profile data." });
      }
    };

    fetchProfile();
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (!updatedInfo.name || !updatedInfo.email) {
      alert("Please fill in all fields before saving.");
      return;
    }

    try {
      // Send updated profile data to the backend
      const response = await updateUserProfile(updatedInfo);

      // Update the user state with the new data
      setUser((prev) => ({
        ...prev,
        name: updatedInfo.name,
        email: updatedInfo.email,
        profilePicture: updatedInfo.profilePicture,
      }));
      setIsEditing(false);
      setSuccessMessage("Profile updated successfully!");
      setErrors({});
    } catch (err) {
      setErrors({ api: err.response?.data?.message || "Failed to update profile." });
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setUpdatedInfo({
      name: user.name,
      email: user.email,
      password: "",
      profilePicture: user.profilePicture,
    });
  };

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUpdatedInfo({ ...updatedInfo, profilePicture: file });
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Your Profile
      </h1>
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <img
            src={
              updatedInfo.profilePicture
                ? URL.createObjectURL(updatedInfo.profilePicture)
                : user.profilePicture
                ? user.profilePicture
                : "default-avatar.png"
            }
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-2 border-blue-600"
          />
        </div>

        <h2 className="text-2xl font-semibold mb-4">Account Details</h2>
        {isEditing ? (
          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Name</label>
              <input
                type="text"
                value={updatedInfo.name}
                onChange={(e) =>
                  setUpdatedInfo({ ...updatedInfo, name: e.target.value })
                }
                className="p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Email</label>
              <input
                type="email"
                value={updatedInfo.email}
                onChange={(e) =>
                  setUpdatedInfo({ ...updatedInfo, email: e.target.value })
                }
                className="p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Password</label>
              <input
                type="password"
                value={updatedInfo.password}
                onChange={(e) =>
                  setUpdatedInfo({ ...updatedInfo, password: e.target.value })
                }
                placeholder="Leave blank to keep current password"
                className="p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Profile Picture</label>
              <input
                type="file"
                accept="image/*"
                onChange={handlePictureChange}
                className="p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex space-x-4">
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <p>
              <span className="font-medium">Name: </span>
              {user.name}
            </p>
            <p>
              <span className="font-medium">Email: </span>
              {user.email}
            </p>
            <button
              onClick={handleEdit}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Edit Profile
            </button>
          </div>
        )}

        {errors.api && (
          <p className="text-sm text-red-600 text-center">{errors.api}</p>
        )}
        {successMessage && (
          <p className="text-sm text-green-600 text-center">{successMessage}</p>
        )}

        <h2 className="text-2xl font-semibold mt-8 mb-4">Booking History</h2>
        {user.bookings.length > 0 ? (
          <div className="space-y-4">
            {user.bookings.map((booking, index) => (
              <div
                key={index}
                className="border p-4 rounded border-gray-300 bg-gray-100"
              >
                <p>
                  <span className="font-medium">Train: </span>
                  {booking.train}
                </p>
                <p>
                  <span className="font-medium">From: </span>
                  {booking.departure}
                </p>
                <p>
                  <span className="font-medium">To: </span>
                  {booking.arrival}
                </p>
                <p>
                  <span className="font-medium">Date: </span>
                  {booking.date}
                </p>
                <p>
                  <span className="font-medium">Tickets: </span>
                  {booking.tickets}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>No bookings found.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;