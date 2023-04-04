import { customAxios } from 'lib/axios/customAxios';
import { authorization } from 'lib/token/authorization';
import { WritePetitionType, StatusType } from 'types/petition.type';

export interface ReplyPetitionParamsType {
  comment: string;
  petitionId: number;
}

// 청원 작성

export const writePetition = async (petitionData: WritePetitionType) => {
  await customAxios.post('/petition', petitionData, authorization());
};

// 청원 리스트 메인에서 얻는거

export const getPetition = async (status: StatusType) => {
  const { data } = await customAxios.get(
    `/petition?status=${status}`,
    authorization(),
  );
  return data;
};

// 상세 페이지

export const getPetitionDetail = async (id: number) => {
  const { data } = await customAxios.get(`/petition/${id}`, authorization());
  return data;
};

// 청원 삭제

export const deletePetition = async (id: number) => {
  await customAxios.delete(`/petition/${id}`, authorization());
};

// 청원 동의하기

export const approvePetition = async (petitionId: number) => {
  await customAxios.post(
    `/petition/${petitionId}/approve`,
    null,
    authorization(),
  );
};

// 청원 댓글

export const commentPetition = async (commentData: ReplyPetitionParamsType) => {
  await customAxios.post(`/comment`, commentData, authorization());
};

// 청원 학생회 답변

export const answerPetition = async (answerData: ReplyPetitionParamsType) => {
  await customAxios.post(`/answer`, answerData, authorization());
};

// 댓글 삭제

export const deleteCommentPetition = async (commentId: number) => {
  await customAxios.delete(`/comment/${commentId}`, authorization());
};

// 마이 페이지

// 내가 동의한 청원

export const approvedPetition = async () => {
  const { data } = await customAxios.get('/petition/approved', authorization());
  return data;
};

// 내가 쓴 청원

export const wrotePetition = async () => {
  const { data } = await customAxios.get('/petition/wrote', authorization());
  return data;
};

export const deleteAnswer = async (answerId: number) => {
  await customAxios.delete(`/answer/${answerId}`, authorization());
};
