import { customAxios } from 'lib/axios/customAxios';
import { authorization } from 'lib/token/authorization';
import { CreateBoardType } from 'type/board/board.type';

export const createBoard = async (boardData: CreateBoardType) => {
  await customAxios.post('/board', boardData, authorization());
};
