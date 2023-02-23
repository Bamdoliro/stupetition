import { answerPetition } from 'apis/petition.api';
import { useMutation, useQueryClient } from 'react-query';
import { AnswerFeatureType } from './answer.props';

export const AnswerFeature = ({
  detailId,
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
      petitionId: detailId,
    });
  };
  return { answerSubmit };
};
