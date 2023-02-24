import { customAxios } from 'lib/axios/customAxios';
import { authorization } from 'lib/token/authorization';
import { WritePetitionType, StatusType } from 'types/petition.type';

export interface CommentPetitionParamsType {
  comment: string;
  petitionId?: number;
}

export const writePetition = async (petitionData: WritePetitionType) => {
  await customAxios.post('/petition', petitionData, authorization());
};

export const getPetition = async (status: StatusType) => {
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

export const approvePetition = async (petitionId: number) => {
  await customAxios.post(`/petition/${petitionId}/approve`, authorization());
};

export const commentPetition = async (
  commentData: CommentPetitionParamsType,
) => {
  await customAxios.post(`/comment`, commentData, authorization());
};

export const answerPetition = async ({
  comment,
  petitionId,
}: CommentPetitionParamsType) => {
  await customAxios.post(
    `/petition/${petitionId}/approve`,
    comment,
    authorization(),
  );
};

export const deleteCommentPetition = async (commentId: number) => {
  await customAxios.delete(`/comment/${commentId}`, authorization());
};
