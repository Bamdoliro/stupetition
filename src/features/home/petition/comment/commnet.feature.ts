import { commentPetition } from 'apis/petition.api';
import { useMutation, useQueryClient } from 'react-query';
import { CommentFeatureType } from './comment.props';

export const CommentFeature = ({
  detailId,
  setComment,
  comment,
}: CommentFeatureType) => {
  const queryClient = useQueryClient();

  const commentMutate = useMutation(commentPetition, {
    onSuccess: () => {
      setComment('');
      queryClient.invalidateQueries(['detailDatas']);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const commentSubmit = () => {
    commentMutate.mutate({
      comment,
      petitionId: detailId,
    });
  };

  return { commentSubmit };
};
