import { getPetitionDetail } from 'apis/petition.api';
import { useQuery } from 'react-query';
import { GetPetitionDetailType } from 'types/petition/petition.type';

export const DetailFeature = (id: number) => {
  const { isLoading, isError, data, refetch } = useQuery<GetPetitionDetailType>(
    ['id', Number(id)],
    () => getPetitionDetail(Number(id)),
  );

  return { isLoading, isError, data, refetch };
};
