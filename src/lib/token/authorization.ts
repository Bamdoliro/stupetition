import { ACCESS_KEY, REQUEST_KEY } from 'lib/config/token.config';

export const authorization = () => {
  return {
    headers: {
      [REQUEST_KEY]: `Bearer ${localStorage.getItem(ACCESS_KEY)}`,
    },
  };
};
