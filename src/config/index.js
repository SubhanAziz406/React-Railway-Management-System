import axios from "axios";

// Define base URLs for each server
const AUTH_BASE_URL = "http://localhost:8000"; // Authentication Server
const TRAIN_BASE_URL = "http://localhost:8001"; // Train Management Server
const BOOKING_BASE_URL = "http://localhost:8002"; // Passenger Booking Server

// Create separate Axios instances for each server
const authApi = axios.create({ baseURL: AUTH_BASE_URL });
const trainApi = axios.create({ baseURL: TRAIN_BASE_URL });
const bookingApi = axios.create({ baseURL: BOOKING_BASE_URL });

// Add a request interceptor to include the JWT token in headers
const addAuthHeader = (config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

authApi.interceptors.request.use(addAuthHeader);
trainApi.interceptors.request.use(addAuthHeader);
bookingApi.interceptors.request.use(addAuthHeader);

// ✅ Authentication APIs
export const loginUser = async (userData) => authApi.post("/login", userData);
export const registerUser = async (userData) => authApi.post("/register", userData);
export const getUserProfile = async () => authApi.get("/user/profile");
export const updateUserProfile = async (profileData) => authApi.put("/user/profile", profileData);

// ✅ Station APIs
export const getStations = async () => trainApi.get("/stations");  // Make sure this matches the backend endpoint

// ✅ Train APIs

export const getTrains = async () => axios.get(`${TRAIN_BASE_URL}/trains`);
export const searchTrains = async (searchParams) => axios.get(`${TRAIN_BASE_URL}/trains/search`, { params: searchParams });

// export const getTrains = async () => trainApi.get("/trains"); 
// export const searchTrains = async (searchParams) => trainApi.post("/trains/search", searchParams);
// export const getTrainById = async (id) => trainApi.get(`/trains/${id}`);

// ✅ Booking APIs
export const getUserBookings = async () => bookingApi.get("/bookings");
export const createBooking = async (bookingData) => bookingApi.post("/bookings", bookingData);
