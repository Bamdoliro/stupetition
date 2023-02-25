import { petitionApproved } from 'apis/petition.api';
import { useQuery } from 'react-query';

interface MyPetitionList {
  createdAt: string;
  title: string;
  numberOfApprover: number;
  id: number;
}

export const ApprovedPetitionFeature = () => {
  const { isLoading, isError, data } = useQuery<MyPetitionList>(
    ['petitionApproved'],
    () => petitionApproved(),
  );

  return { data };
};
