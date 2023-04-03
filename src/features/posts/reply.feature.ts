import { answerPetition, commentPetition } from 'api/petition.api';
import { useMutation, useQueryClient } from 'react-query';
import { Dispatch, SetStateAction } from 'react';
import * as KEY from 'constants/key.constant';
import { Authority } from 'types/user.type';
import { toast } from 'react-toastify';

interface PropsType {
  petitionId: number;
  setComment: Dispatch<SetStateAction<string>>;
  comment: string;
}

export const ReplyFeature = ({
  petitionId,
  setComment,
  comment,
}: PropsType) => {
  const queryClient = useQueryClient();

  const commentMutate = useMutation(commentPetition, {
    onSuccess: () => {
      setComment('');
      toast.success('답변 성공');
      queryClient.invalidateQueries([KEY.PETITION]);
    },
  });

  const answerMutate = useMutation(answerPetition, {
    onSuccess: () => {
      setComment('');
      toast.success('답변 성공');
      queryClient.invalidateQueries([KEY.PETITION]);
    },
  });

  const replySubmit = (option: Authority) => {
    const replyMutate =
      option === 'STUDENT_COUNCIL' ? answerMutate : commentMutate;
    if (comment.length < 2 || comment.length > 500) {
      toast.error('크기가 2에서 500 사이여야 합니다');
    } else {
      replyMutate.mutate({
        comment,
        petitionId,
      });
    }
  };

  return { replySubmit };
};
