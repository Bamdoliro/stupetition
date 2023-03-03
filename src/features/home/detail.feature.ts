import { getPetitionDetail } from 'apis/petition.api';
import { useQuery } from 'react-query';
import { PetitionDetailType } from 'types/petition.type';
import * as KEY from 'constants/key.constant';

export const DetailFeature = (petitionId: number) => {
  const { isLoading, isError, data } = useQuery<PetitionDetailType>(
    [KEY.PETITION, petitionId],
    () => getPetitionDetail(petitionId),
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
        email: '',
        schoolName: '',
        status: 'ATTENDING',
        userId: 0,
      },
    },
  };
};
