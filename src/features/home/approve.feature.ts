import { approvePetition } from 'apis/petition.api';
import { useMutation, useQueryClient } from 'react-query';

export const ApproveFeature = (id: number) => {
  const queryClient = useQueryClient();

  const approveMutate = useMutation(approvePetition, {
    onSuccess: () => {
      alert('동의 완료 !!');
      queryClient.invalidateQueries(['detailDatas']);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const approveSubmit = () => {
    approveMutate.mutate(Number(id));
  };

  return { approveSubmit };
};
