import { customAxios } from 'libs/axios/customAxios';
import { authorization } from 'libs/token/authorization';
import { Storage } from 'libs/storage/storage';
import { ACCESS_KEY, REFRESH_KEY, REQUEST_KEY } from 'constants/token.constant';

/** user info 얻어오기 */
export const getUser = async () => {
  const { data } = await customAxios.get('/user', authorization());
  return data;
};

/** 로그아웃 */
export const logoutUser = async () => {
  await customAxios.delete('/auth', {
    headers: {
      [REQUEST_KEY]: `Bearer ${Storage.getItem(ACCESS_KEY)}`,
      'Refresh-Token': `${Storage.getItem(REFRESH_KEY)}`,
    },
  });
};
