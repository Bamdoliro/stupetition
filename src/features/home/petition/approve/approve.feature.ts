import { approvePetition } from 'apis/petition.api';
import { useMutation } from 'react-query';

export const ApproveFeature = (id: number) => {
  const approveMutate = useMutation(approvePetition, {
    onSuccess: () => {
      alert('동의 완료 !!');
      //   refetch();
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
