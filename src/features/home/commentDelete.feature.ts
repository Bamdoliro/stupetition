import { useMutation } from 'react-query';
import { deleteCommentPetition } from 'apis/petition.api';

export const CommentDeleteFeature = (id: number) => {
  const deleteMutate = useMutation(deleteCommentPetition, {
    onSuccess: () => {
      alert('삭제 성공');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const deleteSubmit = () => {
    // 임시 confirm
    if (window.confirm('정말 댓글을 삭제하시겠습니까?')) {
      deleteMutate.mutate(id);
    }
  };

  return { deleteSubmit };
};
