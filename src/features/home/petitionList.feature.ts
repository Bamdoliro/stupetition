import { useQuery } from 'react-query';
import { getPetition } from 'apis/petition.api';
import { PetitionListType, StatusType } from 'types/petition.type';
import { useRecoilValue } from 'recoil';
import { userState } from 'atoms/user.atom';

export const PetitionListFeature = (status: StatusType) => {
  const user = useRecoilValue(userState);
  const { isLoading, isError, data } = useQuery<PetitionListType[]>(
    ['status', status],
    () => getPetition(status),
    {
      enabled: !!user.authority,
    },
  );

  return { isLoading, isError, data: data || [] };
};
