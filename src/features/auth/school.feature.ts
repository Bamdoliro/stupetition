import { useQuery } from 'react-query';
import { searchSchool } from 'apis/school.api';
import { SchoolType } from 'types/school.type';

export const SchoolFeature = (searchWord: string) => {
  const { data } = useQuery<SchoolType[]>(
    ['searchWord', searchWord],
    () => searchSchool(searchWord),
    {
      enabled: !!searchWord,
      select: (data) => data.slice(0, 10),
    },
  );

  return { data };
};
