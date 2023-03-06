import { useMutation, useQueryClient } from 'react-query';
import { deleteAnswer, deleteCommentPetition } from 'apis/petition.api';
import { useSuccesToast } from 'hooks/useToast';
import * as KEY from 'constants/key.constant';
import { useModal } from 'hooks/useModal';
import { Authority } from 'types/user.type';

interface ReplyFeatureType {
  id: number;
  option: Authority;
}

export const ReplyDeleteFeature = ({ id, option }: ReplyFeatureType) => {
  const queryClient = useQueryClient();
  const { closeModal } = useModal();

  const deleteCommentMutate = useMutation(deleteCommentPetition, {
    onSuccess: () => {
      useSuccesToast('삭제 성공');
      queryClient.invalidateQueries([KEY.PETITION]);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const deleteAnswerMutate = useMutation(deleteAnswer, {
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
    closeModal();
  };

  return { deleteSubmit };
};
