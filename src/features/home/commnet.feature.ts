import { commentPetition } from 'apis/petition.api';
import { useMutation, useQueryClient } from 'react-query';
import { Dispatch, SetStateAction } from 'react';
import * as KEY from 'constants/key.constant';

interface CommentFeatureType {
  petitionId: number;
  setComment: Dispatch<SetStateAction<string>>;
  comment: string;
}

export const CommentFeature = ({
  petitionId,
  setComment,
  comment,
}: CommentFeatureType) => {
  const queryClient = useQueryClient();

  const commentMutate = useMutation(commentPetition, {
    onSuccess: () => {
      setComment('');
      queryClient.invalidateQueries([KEY.PETITION]);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const commentSubmit = () => {
    commentMutate.mutate({
      comment,
      petitionId,
    });
  };

  return { commentSubmit };
};
