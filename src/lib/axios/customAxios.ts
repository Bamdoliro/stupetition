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
    // 토큰 재발급
    const refreshToken = localStorage.getItem('refresh-token');
    if (error.response) {
      // response 있는지 부터 확인
      if (error.response?.status === 401) {
        // 있으면 status 확인
        try {
          const { data } = await customAxios.put('/auth', null, {
            headers: {
              'Refresh-Token': `${refreshToken}`,
            },
          });
          console.log(data);
          localStorage.setItem('acess-token', data.accessToken);
        } catch (err) {
          console.log(err);
        }
      }
    }
  },
);
export { customAxios };
