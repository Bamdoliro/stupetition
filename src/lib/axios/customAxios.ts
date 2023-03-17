import axios from 'axios';
import { tokenExpired } from 'lib/token/tokenExpired';
import { toast } from 'react-toastify';

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
    const { status, code, message } = error.response.data;
    if (message) {
      if (status === 401 && code === 'EXPIRED_TOKEN') {
        tokenExpired();
      }
      if (code !== 'EXPIRED_TOKEN') toast.error(message);
    }
    return Promise.reject(error);
  },
);
export { customAxios };
