import { useQuery } from 'react-query';
import { getPetition } from 'api/petition.api';
import { StatusType } from 'types/petition.type';
import * as KEY from 'constants/key.constant';
import { useUser } from 'hooks/useUser';

interface PetitionListType {
  status: StatusType;
  createdAt: string;
  id: number;
  numberOfApprover: number;
  percentageOfApprover: number;
  title: string;
}

export const usePetitionList = (status: StatusType) => {
  const { user } = useUser();

  const { data, isLoading, isError } = useQuery<PetitionListType[]>(
    [KEY.PETITION_LIST, status],
    () => getPetition(status),
    {
      enabled: !!user.authority,
    },
  );

  return { isLoading, isError, data: data || [] };
};
