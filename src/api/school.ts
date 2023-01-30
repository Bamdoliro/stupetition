import { customAxios } from 'lib/axios/customAxios';

export const getSchoolSerach = async (searchWord: string) => {
  const { data } = await customAxios.get('/school/search', {
    params: {
      q: searchWord,
    },
  });
  return data;
};
