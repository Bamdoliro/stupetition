import { answerPetition } from 'apis/petition.api';
import { useMutation, useQueryClient } from 'react-query';
import { Dispatch, SetStateAction } from 'react';

interface AnswerFeatureType {
  petitionId: number;
  setComment: Dispatch<SetStateAction<string>>;
  comment: string;
}

export const AnswerFeature = ({
  petitionId,
  setComment,
  comment,
}: AnswerFeatureType) => {
  const queryClient = useQueryClient();

  const answerMutate = useMutation(answerPetition, {
    onSuccess: () => {
      setComment('');
      queryClient.invalidateQueries(['detailDatas']);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const answerSubmit = () => {
    answerMutate.mutate({
      comment,
      petitionId,
    });
  };
  return { answerSubmit };
};
