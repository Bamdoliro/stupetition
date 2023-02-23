import { useQuery } from 'react-query';
import { getPetition } from 'apis/petition.api';
import { GetPetitionType, StatusType } from 'types/petition.type';
import { useRecoilValue } from 'recoil';
import { userData } from 'atoms/user.atom';

export const PetitionListFeature = (status: StatusType) => {
  const user = useRecoilValue(userData);
  const { isLoading, isError, data } = useQuery<GetPetitionType[]>(
    ['status', status],
    () => getPetition(status),
    {
      enabled: !!user.authority,
    },
  );

  return { isLoading, isError, data };
};
