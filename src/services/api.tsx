import axios from "axios";

export const api = axios.create({
  baseURL: "https://kenzie-movies.onrender.com",
  timeout: 20000,
});
