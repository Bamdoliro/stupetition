import axios from 'axios';

// 인증이 필요 없는
const customAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

customAxios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

customAxios.interceptors.response.use(
  function (response) {
    if (response.data.status) {
      const errorMessage = response.data.message;
      return errorMessage;
    }
    return response;
  },

  function (error) {
    if (error.response && error.response.status) {
      const errorMessage = error.response.data.message;
      return errorMessage;
    }

    return Promise.reject(error);
  },
);
export { customAxios };
