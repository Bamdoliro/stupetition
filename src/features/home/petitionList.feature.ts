import { useQuery } from 'react-query';
import { getPetition } from 'apis/petition.api';
import { StatusType } from 'types/petition.type';
import { useRecoilValue } from 'recoil';
import { userState } from 'atoms/user.atom';
import * as KEY from 'constants/key.constant';

interface PetitionListType {
  status: StatusType;
  createdAt: string;
  id: number;
  numberOfApprover: number;
  title: string;
}

export const PetitionListFeature = (status: StatusType) => {
  const user = useRecoilValue(userState);
  const { isLoading, isError, data } = useQuery<PetitionListType[]>(
    [KEY.PETITION_LIST, status],
    () => getPetition(status),
    {
      enabled: !!user.authority,
    },
  );

  return { isLoading, isError, data: data || [] };
};
