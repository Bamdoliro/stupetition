import axios from 'axios';
import { useErrorToast } from 'hooks/useToast';
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
    console.log(error);
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
      useErrorToast(message);
    }
    return Promise.reject(error);
  },
);
export { customAxios };
