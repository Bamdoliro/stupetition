import { useQuery } from 'react-query';
import { getPetitions } from 'api/petition.api';
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

/** 청원 리스트 얻어오기 */
export const usePetitionList = (status: StatusType) => {
  const { user } = useUser();

  const { data, isLoading, isError } = useQuery<PetitionListType[]>(
    [KEY.PETITION_LIST, status],
    () => getPetitions(status),
    {
      enabled: !!user.authority,
    },
  );

  return { isLoading, isError, data: data || [] };
};
