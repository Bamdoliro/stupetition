import { answerPetition, commentPetition } from 'apis/petition.api';
import { useMutation, useQueryClient } from 'react-query';
import { Dispatch, SetStateAction } from 'react';
import * as KEY from 'constants/key.constant';
import { useErrorToast } from 'hooks/useToast';
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
      queryClient.invalidateQueries([KEY.PETITION]);
    },
    onError: (err) => {
      console.log(err);
      useErrorToast('크기가 2에서 500 사이여야 합니다');
    },
  });

  const answerMutate = useMutation(answerPetition, {
    onSuccess: () => {
      setComment('');
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
