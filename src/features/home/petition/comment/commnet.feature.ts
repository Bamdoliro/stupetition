import { commentPetition } from 'apis/petition.api';
import { useMutation } from 'react-query';
import { CommentFeatureType } from './comment.props';

export const CommentFeature = ({
  detailId,
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
      petitionId: detailId,
    });
  };

  return { commentSubmit };
};
