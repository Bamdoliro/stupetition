import { customAxios } from 'lib/axios/customAxios';
import { LoginType } from 'types/auth.type';

// 로그인

export const loginUser = async (loginData: LoginType) => {
  const { data } = await customAxios.post('/auth', loginData);
  return data;
};
