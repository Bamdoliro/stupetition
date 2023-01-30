import { customAxios } from 'lib/axios/customAxios';
import { JoinType } from 'type/auth/join.type';

export const postJoin = async (userData: JoinType) => {
  await customAxios.post('/user', userData);
};
