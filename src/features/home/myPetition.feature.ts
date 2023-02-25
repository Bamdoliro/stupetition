import { approvedPetition, wrotePetition } from 'apis/petition.api';
import { useQuery } from 'react-query';

interface MyPetitionList {
  createdAt: string;
  title: string;
  numberOfApprover: number;
  id: number;
}

export const ApprovedPetitionFeature = () => {
  const { isLoading, isError, data } = useQuery<MyPetitionList>(
    ['approvedPetition'],
    () => approvedPetition(),
  );

  return { data };
};

export const WrotePetitionFeature = () => {
  const { isLoading, isError, data } = useQuery<MyPetitionList>(
    ['wrotePetition'],
    () => wrotePetition(),
  );

  return { data };
};
