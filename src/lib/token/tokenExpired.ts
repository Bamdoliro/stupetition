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
  } catch (err) {
    console.log(err);
    localStorage.clear();
    alert('세션이 만료되었습니다');
  }
};
