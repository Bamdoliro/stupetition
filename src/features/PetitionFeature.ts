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
import { Authority } from 'types/user.type';
import { Dispatch, SetStateAction } from 'react';
import { PetitionDetailType } from 'types/petition.type';
import { useUser } from 'hooks/useUser';
import { petitionDetailData } from 'fixtures';

// 청원 상세 데이터

export const usePetitionDetailData = (petitionId: number) => {
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

// 청원 동의

export const useApprovePetitionMutation = (petitionId: number) => {
  const queryClient = useQueryClient();

  return useMutation(() => approvePetition(petitionId), {
    onSuccess: () => {
      toast.success('동의 완료');
      queryClient.invalidateQueries([KEY.PETITION]);
    },
  });
};

// 청원 삭제

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

// 댓글 작성

interface CommentPropsType {
  petitionId: number;
  setComment: Dispatch<SetStateAction<string>>;
  comment: string;
}

export const usePetitionCommentMutation = ({
  petitionId,
  setComment,
  comment,
}: CommentPropsType) => {
  const queryClient = useQueryClient();

  const useStudentCommentMutation = useMutation(
    () =>
      writeComment({
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

  const useCouncilCommentMutation = useMutation(
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

  const useCommentMutation = (option: Authority) =>
    option === 'STUDENT_COUNCIL'
      ? useCouncilCommentMutation
      : useStudentCommentMutation;

  return { useCommentMutation };
};

// 댓글 삭제

interface DeleteCommentPropsType {
  id: number;
  option: Authority;
}

export const useDeletePetitionCommentMutation = ({
  id,
  option,
}: DeleteCommentPropsType) => {
  const queryClient = useQueryClient();
  const { closeModal } = useModal();

  const useDeleteStudentCommentMutation = useMutation(() => deleteComment(id), {
    onSuccess: () => {
      toast.success('삭제 성공');
      queryClient.invalidateQueries([KEY.PETITION]);
      closeModal();
    },
  });

  const useDeleteCouncilCommentMutation = useMutation(() => deleteAnswer(id), {
    onSuccess: () => {
      toast.success('삭제 성공');
      queryClient.invalidateQueries([KEY.PETITION]);
      closeModal();
    },
  });

  const useDeleteCommentMutation = () =>
    option === 'STUDENT_COUNCIL'
      ? useDeleteCouncilCommentMutation
      : useDeleteStudentCommentMutation;

  return { useDeleteCommentMutation };
};
