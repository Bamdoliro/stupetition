import axios from 'axios';
import { tokenExpired } from 'lib/token/tokenExpired';

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

customAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

customAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response?.status === 401) {
        tokenExpired();
      }
      alert(error.request.response);
    }
    return Promise.reject(error);
  },
);
export { customAxios };
