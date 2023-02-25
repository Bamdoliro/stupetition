import { getPetitionDetail } from 'apis/petition.api';
import { useQuery } from 'react-query';
import { PetitionDetailType } from 'types/petition.type';

export const DetailFeature = (detailId: number) => {
  const { isLoading, isError, data } = useQuery<PetitionDetailType>(
    ['detailDatas', detailId],
    () => getPetitionDetail(detailId),
  );

  return {
    isLoading,
    isError,
    data: data || {
      approved: false,
      createdAt: '0000-00-00T00:00:00',
      status: 'ANSWERED',
      title: '',
      numberOfApprover: 0,
      content: '',
      comments: [],
      answer: [],
    },
  };
};
