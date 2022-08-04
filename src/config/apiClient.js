import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  }
});

export default apiClient;