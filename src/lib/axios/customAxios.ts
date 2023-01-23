import axios from 'axios';

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('access-token')}`,
  },
});

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
export default customAxios;
