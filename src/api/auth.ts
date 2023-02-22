import { customAxios } from 'lib/axios/customAxios';
import { JoinType, LoginType } from 'types/auth/auth.type';
import { authorization } from 'lib/token/authorization';

export const joinUser = async ({ email, password, schoolId }: JoinType) => {
  await customAxios.post('/user', { email, password, schoolId });
};

export const loginUser = async (loginData: LoginType) => {
  const { data } = await customAxios.post('/auth', loginData);
  return data;
};

export const logoutUser = async () => {
  await customAxios.delete('/auth', authorization());
};
