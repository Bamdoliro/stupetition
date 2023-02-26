import { commentPetition } from 'apis/petition.api';
import { useMutation, useQueryClient } from 'react-query';
import { Dispatch, SetStateAction } from 'react';
import * as KEY from 'constants/key.constant';
import { useErrorToast } from 'hooks/useToast';

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
      useErrorToast('크기가 2에서 500 사이여야 합니다');
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
