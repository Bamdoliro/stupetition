import { useMutation, useQueryClient } from 'react-query';
import { deleteAnswerPetition, deleteCommentPetition } from 'apis/petition.api';
import { useSuccesToast } from 'hooks/useToast';
import * as KEY from 'constants/key.constant';

interface ReplyFeatureType {
  id: number;
  option: 'STUDENT_COUNCIL' | 'STUDENT';
}

export const ReplyDeleteFeature = ({ id, option }: ReplyFeatureType) => {
  const queryClient = useQueryClient();

  const deleteCommentMutate = useMutation(deleteCommentPetition, {
    onSuccess: () => {
      useSuccesToast('삭제 성공');
      queryClient.invalidateQueries([KEY.PETITION]);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const deleteAnswerMutate = useMutation(deleteAnswerPetition, {
    onSuccess: () => {
      useSuccesToast('삭제 성공');
      queryClient.invalidateQueries([KEY.PETITION]);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const deleteMutate =
    option === 'STUDENT_COUNCIL' ? deleteAnswerMutate : deleteCommentMutate;

  const deleteSubmit = () => {
    deleteMutate.mutate(id);
  };

  return { deleteSubmit };
};
