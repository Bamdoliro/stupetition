import { customAxios } from 'lib/axios/customAxios';
import { ACCESS_KEY, REFRESH_KEY } from 'lib/config/token.config';

export const tokenExpired = async () => {
  try {
    const { data } = await customAxios.put('/auth', null, {
      headers: {
        'Refresh-Token': `${localStorage.getItem(REFRESH_KEY)}`,
      },
    });
    localStorage.setItem(ACCESS_KEY, data.accessToken);
    localStorage.setItem(REFRESH_KEY, data.refreshToken);
    alert('다시 시도해 주세요 !');
  } catch (err) {
    console.log(err);
  }
};
