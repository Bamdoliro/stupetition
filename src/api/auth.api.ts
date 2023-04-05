import { customAxios } from 'lib/axios/customAxios';
import { LoginType } from 'types/auth.type';

// 로그인

export const loginUser = async (loginData: LoginType) => {
  const { data } = await customAxios.post('/auth', loginData);
  return data;
};

// 구글 링크

export const getGoogleAuthLink = async () => {
  const { data } = await customAxios.get('/auth/google');
  return data;
};
