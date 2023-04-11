import { customAxios } from 'lib/axios/customAxios';
import { authorization } from 'lib/token/authorization';
import { WritePetitionType, StatusType } from 'types/petition.type';

export interface ReplyPetitionParamsType {
  comment: string;
  petitionId: number;
}

/** 청원 만들기 */
export const createPetition = async (petitionData: WritePetitionType) => {
  await customAxios.post('/petition', petitionData, authorization());
};

/** 청원 리스트 얻어오기 */
export const getPetitions = async (status: StatusType) => {
  const { data } = await customAxios.get(
    `/petition?status=${status}`,
    authorization(),
  );
  return data;
};

/** 청원 상세 페이지 데이터 얻어오기 */
export const getPetitionDetail = async (id: number) => {
  const { data } = await customAxios.get(`/petition/${id}`, authorization());
  return data;
};

/** 청원 삭제 */
export const deletePetition = async (id: number) => {
  await customAxios.delete(`/petition/${id}`, authorization());
};

/** 청원 동의하기 */
export const approvePetition = async (petitionId: number) => {
  await customAxios.post(
    `/petition/${petitionId}/approve`,
    null,
    authorization(),
  );
};

/** 댓글 작성 (학생) */
export const writeComment = async (commentData: ReplyPetitionParamsType) => {
  await customAxios.post(`/comment`, commentData, authorization());
};

/** 답변 작성 (학생회) */
export const answerPetition = async (answerData: ReplyPetitionParamsType) => {
  await customAxios.post(`/answer`, answerData, authorization());
};

/** 댓글 삭제 (학생) */
export const deleteComment = async (commentId: number) => {
  await customAxios.delete(`/comment/${commentId}`, authorization());
};

/** 답변 삭제 (학생회) */
export const deleteAnswer = async (answerId: number) => {
  await customAxios.delete(`/answer/${answerId}`, authorization());
};

/** 내가 동의한 청원 얻어오기 */
export const getApprovedPetitions = async () => {
  const { data } = await customAxios.get('/petition/approved', authorization());
  return data;
};

/** 내가 쓴 청원 얻어오기 */
export const getWrotePetitions = async () => {
  const { data } = await customAxios.get('/petition/wrote', authorization());
  return data;
};
