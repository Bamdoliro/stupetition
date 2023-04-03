import { approvePetition } from 'api/petition.api';
import { useMutation, useQueryClient } from 'react-query';
import * as KEY from 'constants/key.constant';
import { toast } from 'react-toastify';

export const ApproveFeature = (petitionId: number) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(approvePetition, {
    onSuccess: () => {
      toast.success('동의 완료');
      queryClient.invalidateQueries([KEY.PETITION]);
    },
  });

  const approveSubmit = () => {
    mutate(petitionId);
  };

  return { approveSubmit };
};
