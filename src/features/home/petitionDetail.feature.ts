import { getPetitionDetail } from 'apis/petition.api';
import { useQuery } from 'react-query';
import { PetitionDetailType } from 'types/petition.type';
import * as KEY from 'constants/key.constant';
import { useUser } from 'hooks/useUser';
import { petitionDetail } from 'fixtures/index';

export const PetitionDetailFeature = (petitionId: number) => {
  const { user } = useUser();
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
    data: data || petitionDetail,
  };
};
