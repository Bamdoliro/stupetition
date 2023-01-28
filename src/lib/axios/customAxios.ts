import axios, { AxiosError } from 'axios';
import { getAccessToken, getRefreshToken } from 'lib/token/token';
import { AccessExpression } from 'typescript';

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
  (response) => {
    return response;
  },

  async (error: AxiosError) => {
    // if (error.response && error.response.status) {
    //   // error 메세지를 json으로 주면 어케 처리해야하나요 알려주세요..
    //   // 따로 util 만들어서 처리 해야하나요?
    //   const errorMessage = error.request.response;
    //   alert(errorMessage);
    //   return errorMessage;
    // }

    // 토큰 재발급
    const refreshToken = getRefreshToken();
    console.log(error);

    if (error.response) {
      try {
        const { data } = await customAxios.put('/auth', null, {
          headers: {
            'Refresh-Token': `${refreshToken}`,
          },
        });
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
  },
);
export { customAxios };
