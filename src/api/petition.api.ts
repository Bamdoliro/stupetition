import { customAxios } from 'lib/axios/customAxios';
import { authorization } from 'lib/token/authorization';
import { WritePetitionType, StatusType } from 'types/petition.type';

export interface ReplyPetitionParamsType {
  comment: string;
  petitionId: number;
}

export const createPetition = async (petitionData: WritePetitionType) => {
  await customAxios.post('/petition', petitionData, authorization());
};

export const getPetitions = async (status: StatusType) => {
  const { data } = await customAxios.get(
    `/petition?status=${status}`,
    authorization(),
  );
  return data;
};

export const getPetitionDetail = async (id: number) => {
  const { data } = await customAxios.get(`/petition/${id}`, authorization());
  return data;
};

export const deletePetition = async (id: number) => {
  await customAxios.delete(`/petition/${id}`, authorization());
};

export const approvePetition = async (petitionId: number) => {
  await customAxios.post(
    `/petition/${petitionId}/approve`,
    null,
    authorization(),
  );
};

export const writeComment = async (commentData: ReplyPetitionParamsType) => {
  await customAxios.post(`/comment`, commentData, authorization());
};

export const answerPetition = async (answerData: ReplyPetitionParamsType) => {
  await customAxios.post(`/answer`, answerData, authorization());
};

export const deleteComment = async (commentId: number) => {
  await customAxios.delete(`/comment/${commentId}`, authorization());
};

export const deleteAnswer = async (answerId: number) => {
  await customAxios.delete(`/answer/${answerId}`, authorization());
};

export const getApprovedPetitions = async () => {
  const { data } = await customAxios.get('/petition/approved', authorization());
  return data;
};

export const getWrotePetitions = async () => {
  const { data } = await customAxios.get('/petition/wrote', authorization());
  return data;
};
