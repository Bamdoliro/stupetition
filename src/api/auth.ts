import { customAxios } from 'lib/axios/customAxios';
import { JoinType, LoginType } from 'type/auth/auth.type';
import { authorization } from 'lib/token/authorization';

export const postJoin = async (userData: JoinType) => {
  await customAxios.post('/user', userData);
};

export const postLogin = async (loginData: LoginType) => {
  const { data } = await customAxios.post('/auth', loginData);
  return data;
};

export const deleteLogout = async () => {
  await customAxios.delete('/auth', authorization());
};
