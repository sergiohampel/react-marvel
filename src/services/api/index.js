import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(
  (config) => {
    config.params = {
      apikey: process.env.REACT_APP_API_KEY,
    };

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
