import { customAxios } from 'lib/axios/customAxios';
import { JoinType, LoginType } from 'types/auth.type';
import { authorization } from 'lib/token/authorization';

// 회원가입

export const joinUser = async ({ email, password, schoolId }: JoinType) => {
  await customAxios.post('/user', { email, password, schoolId });
};

// 로그인

export const loginUser = async (loginData: LoginType) => {
  const { data } = await customAxios.post('/auth', loginData);
  return data;
};

// 로그아웃

export const logoutUser = async () => {
  await customAxios.delete('/auth', authorization());
};
