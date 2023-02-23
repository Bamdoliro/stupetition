import { ACCESS_KEY, REQUEST_KEY } from 'constants/token.constant';

export const authorization = () => {
  return {
    headers: {
      [REQUEST_KEY]: `Bearer ${localStorage.getItem(ACCESS_KEY)}`,
    },
  };
};
