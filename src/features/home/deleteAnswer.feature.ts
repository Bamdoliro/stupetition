import { useMutation, useQueryClient } from 'react-query';
import { deleteAnswerPetition } from 'apis/petition.api';
import { useSuccesToast } from 'hooks/useToast';
import * as KEY from 'constants/key.constant';

export const AnswerDeleteFeature = (id: number) => {
  const queryClient = useQueryClient();

  const deleteMutate = useMutation(deleteAnswerPetition, {
    onSuccess: () => {
      useSuccesToast('삭제 성공');
      queryClient.invalidateQueries([KEY.PETITION]);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const deleteAnswerSubmit = () => {
    deleteMutate.mutate(id);
  };

  return { deleteAnswerSubmit };
};
