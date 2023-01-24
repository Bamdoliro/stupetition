import { getAccessToken } from './token';

export const authorization = () => {
  return {
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  };
};
