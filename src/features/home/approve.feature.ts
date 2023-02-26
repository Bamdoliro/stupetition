import { approvePetition } from 'apis/petition.api';
import { useMutation, useQueryClient } from 'react-query';
import * as KEY from 'constants/key.constant';

export const ApproveFeature = (petitionId: number) => {
  const queryClient = useQueryClient();

  const approveMutate = useMutation(approvePetition, {
    onSuccess: () => {
      alert('동의 완료 !!');
      queryClient.invalidateQueries([KEY.PETITION]);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const approveSubmit = () => {
    approveMutate.mutate(petitionId);
  };

  return { approveSubmit };
};
