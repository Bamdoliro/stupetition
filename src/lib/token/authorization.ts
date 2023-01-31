import { getAccessToken } from '../storage/token';

export const authorization = () => {
  const token = getAccessToken();
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
