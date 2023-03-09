import { approvedPetition, wrotePetition } from 'apis/petition.api';
import { useQuery } from 'react-query';
import { StatusType } from 'types/petition.type';
import * as KEY from 'constants/key.constant';
import { useRecoilValue } from 'recoil';
import { userState } from 'atoms/user.atom';

interface MyPetitionList {
  createdAt: string;
  title: string;
  numberOfApprover: number;
  id: number;
  status: StatusType;
}

export const MyPetitionFeature = (status: StatusType) => {
  const user = useRecoilValue(userState);

  const ApprovedPetitionFeature = () => {
    const { isLoading, isError, data } = useQuery<MyPetitionList[]>(
      [KEY.PETITION_APPROVED],
      () => approvedPetition(),
      {
        enabled: !!user.authority,
      },
    );

    return { isLoading, data, isError };
  };

  const WrotePetitionFeature = () => {
    const user = useRecoilValue(userState);

    const { isLoading, isError, data } = useQuery<MyPetitionList[]>(
      [KEY.PETITION_WROTE],
      () => wrotePetition(),
      {
        enabled: !!user.authority,
      },
    );

    return { isLoading, data, isError };
  };

  const { data, isLoading, isError } =
    status === 'APPROVED' ? ApprovedPetitionFeature() : WrotePetitionFeature();

  return { data: data || [], isLoading, isError };
};
