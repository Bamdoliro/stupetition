import { Dispatch, SetStateAction } from 'react';
import { StatusType } from 'type/board/board.type';

export interface RadioPropsType {
  status: string;
  setStatus: Dispatch<SetStateAction<StatusType>>;
}
