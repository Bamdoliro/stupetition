import { customAxios } from 'lib/axios/customAxios';
import { ACCESS_KEY, REFRESH_KEY } from 'constants/token.constant';
import { toast } from 'react-toastify';
import { Storage } from 'lib/storage/storage';

export const tokenExpired = async () => {
  try {
    const { data } = await customAxios.put('/auth', null, {
      headers: {
        'Refresh-Token': `${Storage.getItem(REFRESH_KEY)}`,
      },
    });
    Storage.setItem(ACCESS_KEY, data.accessToken);
  } catch {
    toast.error('세션이 만료되었습니다');
    localStorage.clear();
    window.location.href = '/login';
  }
};
