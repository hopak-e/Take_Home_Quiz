import axios from "axios";

const axiosInstance = () => {
  const base = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
  });
  return base;
};

export default axiosInstance;
