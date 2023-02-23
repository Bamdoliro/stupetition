import { getPetitionDetail } from 'apis/petition.api';
import { useQuery } from 'react-query';
import { GetPetitionDetailType } from 'types/petition/petition.type';

export const DetailFeature = (detailId: number) => {
  const { isLoading, isError, data, refetch } = useQuery<GetPetitionDetailType>(
    ['id', detailId],
    () => getPetitionDetail(detailId),
  );

  return { isLoading, isError, data, refetch };
};
