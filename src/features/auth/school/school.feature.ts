import { SchoolType } from 'types/school/search.type';
import { useQuery } from 'react-query';
import { searchSchool } from 'apis/school.api';
import { SchoolFeatureType } from './school.props';

export const SchoolFeature = ({ searchWord }: SchoolFeatureType) => {
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
