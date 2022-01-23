import axios from "axios";

export const baseURL = "http://localhost:3001";

export const authToken = localStorage.getItem("token");

export const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  responseType: "json",
  headers: { Authorization: authToken },
});
