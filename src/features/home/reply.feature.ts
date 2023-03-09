import { answerPetition, commentPetition } from 'apis/petition.api';
import { useMutation, useQueryClient } from 'react-query';
import { Dispatch, SetStateAction } from 'react';
import * as KEY from 'constants/key.constant';
import { useErrorToast, useSuccesToast } from 'hooks/useToast';
import { Authority } from 'types/user.type';

interface ReplyFeatureType {
  petitionId: number;
  setComment: Dispatch<SetStateAction<string>>;
  comment: string;
}

export const ReplyFeature = ({
  petitionId,
  setComment,
  comment,
}: ReplyFeatureType) => {
  const queryClient = useQueryClient();

  const commentMutate = useMutation(commentPetition, {
    onSuccess: () => {
      setComment('');
      useSuccesToast('답변 성공');
      queryClient.invalidateQueries([KEY.PETITION]);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const answerMutate = useMutation(answerPetition, {
    onSuccess: () => {
      setComment('');
      useSuccesToast('답변 성공');
      queryClient.invalidateQueries([KEY.PETITION]);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const replySubmit = (option: Authority) => {
    const deleteMutate =
      option === 'STUDENT_COUNCIL' ? answerMutate : commentMutate;

    deleteMutate.mutate({
      comment,
      petitionId,
    });
  };

  return { replySubmit };
};
