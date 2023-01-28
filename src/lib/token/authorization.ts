import { getAccessToken } from './token';

export const authorization = () => {
  const token = getAccessToken();
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
