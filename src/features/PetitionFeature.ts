import {
  answerPetition,
  approvePetition,
  writeComment,
  deleteAnswer,
  deleteComment,
  deletePetition,
  getPetitionDetail,
} from 'api/petition.api';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import * as KEY from 'constants/key.constant';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useModal } from 'hooks/useModal';
import { Dispatch, SetStateAction } from 'react';
import { PetitionDetailType } from 'types/petition.type';
import { useUser } from 'hooks/useUser';
import { petitionDetailData } from 'fixtures';

/** 청원 상세 페이지 데이터 불러오기 */
export const usePetitionDetail = (petitionId: number) => {
  const { user } = useUser();

  const { data, isLoading, isError } = useQuery<PetitionDetailType>(
    [KEY.PETITION, petitionId],
    () => getPetitionDetail(petitionId),
    {
      enabled: !!user.authority,
    },
  );

  return {
    isLoading,
    isError,
    data: data || petitionDetailData,
  };
};

/** 청원 동의하기 */
export const useApprovePetitionMutation = (petitionId: number) => {
  const queryClient = useQueryClient();

  return useMutation(() => approvePetition(petitionId), {
    onSuccess: () => {
      toast.success('동의 완료');
      queryClient.invalidateQueries([KEY.PETITION]);
    },
  });
};

/** 청원 삭제하기 */
export const useDeletePetitionMutation = (petitionId: number) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { closeModal } = useModal();

  return useMutation(() => deletePetition(petitionId), {
    onSuccess: () => {
      closeModal();
      toast.success('삭제 완료');
      queryClient.invalidateQueries([KEY.PETITION_LIST]);
      navigate('/main');
    },
  });
};

interface CommentPropsType {
  petitionId: number;
  setComment: Dispatch<SetStateAction<string>>;
  comment: string;
}

/** 청원 댓글 쓰기 (학생) */
export const useWriteCommentMutation = ({
  petitionId,
  setComment,
  comment,
}: CommentPropsType) => {
  const queryClient = useQueryClient();

  return useMutation(
    () =>
      writeComment({
        comment,
        petitionId,
      }),
    {
      onSuccess: () => {
        setComment('');
        toast.success('작성 성공');
        queryClient.invalidateQueries([KEY.PETITION]);
      },
    },
  );
};

/** 청원 답변 쓰기 (학생회) */
export const useWriteAnswerMutation = ({
  petitionId,
  setComment,
  comment,
}: CommentPropsType) => {
  const queryClient = useQueryClient();

  return useMutation(
    () =>
      answerPetition({
        comment,
        petitionId,
      }),
    {
      onSuccess: () => {
        setComment('');
        toast.success('답변 성공');
        queryClient.invalidateQueries([KEY.PETITION]);
      },
    },
  );
};

/** 댓글 삭제 (학생) */
export const useDeleteCommentMutation = (id: number) => {
  const queryClient = useQueryClient();
  const { closeModal } = useModal();

  return useMutation(() => deleteComment(id), {
    onSuccess: () => {
      toast.success('삭제 성공');
      queryClient.invalidateQueries([KEY.PETITION]);
      closeModal();
    },
  });
};

/** 답변 삭제 (학생회) */
export const useDeleteAnswerMutation = (id: number) => {
  const queryClient = useQueryClient();
  const { closeModal } = useModal();

  return useMutation(() => deleteAnswer(id), {
    onSuccess: () => {
      toast.success('삭제 성공');
      queryClient.invalidateQueries([KEY.PETITION]);
      closeModal();
    },
  });
};
