import { getPetitionDetail } from 'apis/petition.api';
import { useQuery } from 'react-query';
import { PetitionDetailType } from 'types/petition.type';
import * as KEY from 'constants/key.constant';
import { useRecoilValue } from 'recoil';
import { userState } from 'atoms/user.atom';

export const DetailFeature = (petitionId: number) => {
  const user = useRecoilValue(userState);

  const { isLoading, isError, data } = useQuery<PetitionDetailType>(
    [KEY.PETITION, petitionId],
    () => getPetitionDetail(petitionId),
    {
      enabled: !!user.authority,
    },
  );

  return {
    isLoading,
    isError,
    data: data || {
      approved: false,
      createdAt: '0000-00-00T00:00:00',
      status: 'ANSWERED',
      title: '',
      numberOfApprover: 0,
      content: '',
      comments: [],
      answer: [],
      hasPermission: false,
      writer: {
        authority: 'ROLE_STUDENT',
        username: '',
        schoolName: '',
        status: 'ATTENDING',
        userId: 0,
      },
    },
  };
};
