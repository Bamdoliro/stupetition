import { approvedPetition, wrotePetition } from 'apis/petition.api';
import { useQuery } from 'react-query';
import { StatusType } from 'types/petition.type';
import * as KEY from 'constants/key.constant';

interface MyPetitionList {
  createdAt: string;
  title: string;
  numberOfApprover: number;
  id: number;
  status: StatusType;
}

export const ApprovedPetitionFeature = () => {
  const { isLoading, isError, data } = useQuery<MyPetitionList[]>(
    [KEY.PETITION_APPROVED],
    () => approvedPetition(),
  );

  return data;
};

export const WrotePetitionFeature = () => {
  const { isLoading, isError, data } = useQuery<MyPetitionList[]>(
    [KEY.PETITION_WROTE],
    () => wrotePetition(),
  );

  return data;
};
