import { useQuery } from 'react-query';
import { getPetition } from 'apis/petition.api';
import { MyPetitionStatusType, StatusType } from 'types/petition.type';
import { useRecoilValue } from 'recoil';
import { userState } from 'atoms/user.atom';

interface PetitionListType {
  status: StatusType;
  createdAt: string;
  id: number;
  numberOfApprover: number;
  title: string;
}

export const PetitionListFeature = (
  status: StatusType | MyPetitionStatusType,
) => {
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
