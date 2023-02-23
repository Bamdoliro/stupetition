import axios from 'axios';
import { ACCESS_KEY } from 'constants/token.constant';
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
    const { status, code } = error.response.data;
    if (status === 401 && code === 'EXPIRED_TOKEN') {
      tokenExpired();
    }
    return Promise.reject(error);
  },
);
export { customAxios };
