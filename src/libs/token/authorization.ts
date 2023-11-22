import { ACCESS_KEY, REQUEST_KEY } from 'constants/token.constant';
import { Storage } from 'libs/storage/storage';

export const authorization = () => {
  return {
    headers: {
      [REQUEST_KEY]: `Bearer ${Storage.getItem(ACCESS_KEY)}`,
    },
  };
};
