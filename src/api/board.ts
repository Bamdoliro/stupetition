import { customAxios } from 'lib/axios/customAxios';
import { authorization } from 'lib/token/authorization';
import { CreateBoardType, StatusType } from 'type/board/board.type';

export const createBoard = async (boardData: CreateBoardType) => {
  await customAxios.post('/board', boardData, authorization());
};

export const getBoard = async (status: StatusType) => {
  const { data } = await customAxios.get(
    `/board?status=${status}`,
    authorization(),
  );
  return data;
};

export const getBoardDetail = async (id: number) => {
  const { data } = await customAxios.get(`/board/${id}`, authorization());
  return data;
};
