import { getPetitionDetail } from 'apis/petition.api';
import { useQuery } from 'react-query';
import { PetitionDetailType } from 'types/petition.type';

export const DetailFeature = (detailId: number) => {
  const { isLoading, isError, data } = useQuery<PetitionDetailType>(
    ['detailDatas', detailId],
    () => getPetitionDetail(detailId),
  );

  return { isLoading, isError, data };
};
