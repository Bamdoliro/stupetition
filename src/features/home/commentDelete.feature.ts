import { useMutation, useQueryClient } from 'react-query';
import { deleteCommentPetition } from 'apis/petition.api';
import { useSuccesToast } from 'hooks/useToast';
import * as KEY from 'constants/key.constant';

export const CommentDeleteFeature = (id: number) => {
  const queryClient = useQueryClient();

  const deleteMutate = useMutation(deleteCommentPetition, {
    onSuccess: () => {
      useSuccesToast('삭제 성공');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const deleteSubmit = () => {
    deleteMutate.mutate(id);
    queryClient.invalidateQueries([KEY.PETITION]);
  };

  return { deleteSubmit };
};
