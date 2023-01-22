import axios from 'axios';

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
});

customAxios.interceptors.response.use(
  function (response) {
    if (response.data.status) {
      const ErrorMessage = response.data.message;
      return ErrorMessage;
    }
    if (response.status === 200) {
      return '로그인 성공 !!';
    }
    return response;
  },

  function (error) {
    if (error.response && error.response.status) {
      const ErrorMessage = error.response.data.message;
      return ErrorMessage;
    }

    return Promise.reject(error);
  },
);
export default customAxios;
