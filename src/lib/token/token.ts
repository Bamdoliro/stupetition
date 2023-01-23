export const setAccessToken = async (token: string) => {
  await localStorage.setItem('access-token', token);
};

export const getAccessToken = async () => {
  const response = await localStorage.getItem('access-token');
  return response;
};

export const deleteAccessToken = async () => {
  await localStorage.removeItem('access-token');
};

export const setRefreshToken = async (token: string) => {
  await localStorage.setItem('refresh-token', token);
};

export const getRefreshToken = async () => {
  const response = await localStorage.getItem('refresh-token');
  return response;
};

export const deleteRefreshToken = async () => {
  await localStorage.removeItem('refresh-token');
};
