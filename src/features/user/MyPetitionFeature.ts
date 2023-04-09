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

export const MyPetitionFeature = (status: StatusType) => {
  const { user } = useUser();

  const useApprovedPetitionList = () => {
    return useQuery<MyPetitionList[]>(
      [KEY.PETITION_APPROVED],
      () => approvedPetition(),
      {
        enabled: !!user.authority,
      },
    );
  };

  const useWrotePetitionList = () => {
    return useQuery<MyPetitionList[]>(
      [KEY.PETITION_WROTE],
      () => wrotePetition(),
      {
        enabled: !!user.authority,
      },
    );
  };

  const useMyPetitionList = () =>
    status === 'WROTE' ? useWrotePetitionList() : useApprovedPetitionList();

  return { useMyPetitionList };
};
