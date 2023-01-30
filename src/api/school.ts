import { customAxios } from 'lib/axios/customAxios';

export const searchSchool = async (searchWord: string) => {
  const { data } = await customAxios.get('/school/search', {
    params: {
      q: searchWord,
    },
  });
  return data;
};
