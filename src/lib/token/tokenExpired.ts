import { customAxios } from 'lib/axios/customAxios';
import { getRefreshToken } from './token';

export const tokenExpired = async () => {
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
};
