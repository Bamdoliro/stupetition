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
    return response;
  },

  function (error) {
    if (error.response && error.response.status) {
      // error 메세지를 json으로 주면 어케 처리해야하나요 알려주세요..
      // 따로 util 만들어서 처리 해야하나요?
      const errorMessage = error.request.response;
      alert(errorMessage);
      return errorMessage;
    }

    return Promise.reject(error);
  },
);
export { customAxios };
