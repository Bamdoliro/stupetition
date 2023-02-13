import { customAxios } from 'lib/axios/customAxios';
import { authorization } from 'lib/token/authorization';
import {
  CreatePetitionType,
  PostPetitionType,
  StatusType,
} from 'type/petition/petition.type';

export const createPetition = async (petitionData: CreatePetitionType) => {
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

export const commentPetition = async (commentData: PostPetitionType) => {
  await customAxios.post(`/comment`, commentData, authorization());
};

export const deleteCommentPetition = async (commentId: number) => {
  await customAxios.delete(`/comment/${commentId}`, authorization());
};
