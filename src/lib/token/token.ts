export const setAccessToken = (token: string) => {
  localStorage.setItem('access-token', token);
};

export const getAccessToken = () => {
  return localStorage.getItem('access-token');
};

export const deleteAccessToken = () => {
  localStorage.removeItem('access-token');
};

export const setRefreshToken = (token: string) => {
  localStorage.setItem('refresh-token', token);
};

export const getRefreshToken = () => {
  localStorage.getItem('refresh-token');
};

export const deleteRefreshToken = () => {
  localStorage.removeItem('refresh-token');
};
