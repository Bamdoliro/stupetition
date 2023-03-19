import { useMutation, useQueryClient } from 'react-query';
import { deleteAnswer, deleteCommentPetition } from 'apis/petition.api';
import * as KEY from 'constants/key.constant';
import { useModal } from 'hooks/useModal';
import { Authority } from 'types/user.type';
import { toast } from 'react-toastify';

interface PropsType {
  id: number;
  option: Authority;
}

export const ReplyDeleteFeature = ({ id, option }: PropsType) => {
  const queryClient = useQueryClient();
  const { closeModal } = useModal();

  const deleteCommentMutate = useMutation(deleteCommentPetition, {
    onSuccess: () => {
      toast.success('삭제 성공');
      queryClient.invalidateQueries([KEY.PETITION]);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const deleteAnswerMutate = useMutation(deleteAnswer, {
    onSuccess: () => {
      toast.success('삭제 성공');
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
