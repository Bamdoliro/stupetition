import axios, { AxiosError } from 'axios';
import { getRefreshToken } from 'lib/token/token';
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
    console.log(response);
    return response;
  },
  async (error: AxiosError) => {
    if (error.response) {
      if (error.response?.status === 401) {
        // 토큰 재발급 로직
        const refreshToken = getRefreshToken();
        try {
          const { data } = await customAxios.put('/auth', null, {
            headers: {
              'Refresh-Token': `${refreshToken}`,
            },
          });
          localStorage.setItem('access-token', data.accessToken);
          alert('다시 시도해 주세요 !');
        } catch (err) {
          console.log(err);
        }
      }
    }
    alert(error.request.response);
    // 에러 메세지 나중에 고치자...
    // 심청이 하고 와서 고치자..
    return error;
  },
);
export { customAxios };
