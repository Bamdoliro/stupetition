import { commentPetition } from 'apis/petition.api';
import { useMutation } from 'react-query';
import { CommentFeatureType } from './comment.props';

export const CommentFeature = ({
  id,
  setComment,
  comment,
}: CommentFeatureType) => {
  const commentMutate = useMutation(commentPetition, {
    onSuccess: () => {
      setComment('');
      //   refetch();
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const commentSubmit = () => {
    commentMutate.mutate({
      comment,
      petitionId: Number(id),
    });
  };

  return { commentSubmit };
};
