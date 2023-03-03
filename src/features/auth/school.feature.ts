import { useQuery } from 'react-query';
import { searchSchool } from 'apis/school.api';
import { SchoolType } from 'types/school.type';
import * as KEY from 'constants/key.constant';

export const SchoolFeature = (searchWord: string) => {
  const { data, isLoading } = useQuery<SchoolType[]>(
    [KEY.SCHOOL_LIST, searchWord],
    () => searchSchool(searchWord),
    {
      enabled: !!searchWord,
      select: (data) => data.slice(0, 10),
    },
  );

  return { data: data || [], isLoading };
};
