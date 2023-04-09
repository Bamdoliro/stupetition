import { approvedPetition, wrotePetition } from 'api/petition.api';
import { useQuery } from 'react-query';
import { StatusType } from 'types/petition.type';
import * as KEY from 'constants/key.constant';
import { useUser } from 'hooks/useUser';

interface MyPetitionList {
  createdAt: string;
  title: string;
  numberOfApprover: number;
  percentageOfApprover: number;
  id: number;
  status: StatusType;
}

export const useMyPetitionList = (status: StatusType) => {
  const { user } = useUser();

  const approvedPetitionList = useQuery<MyPetitionList[]>(
    [KEY.PETITION_APPROVED],
    () => approvedPetition(),
    {
      enabled: !!user.authority,
    },
  );

  const wrotePetitionList = useQuery<MyPetitionList[]>(
    [KEY.PETITION_WROTE],
    () => wrotePetition(),
    {
      enabled: !!user.authority,
    },
  );

  const { data, isLoading, isError } =
    status === 'WROTE' ? wrotePetitionList : approvedPetitionList;

  return { data, isLoading, isError };
};
