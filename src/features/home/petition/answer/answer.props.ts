import { Dispatch, SetStateAction } from 'react';

export interface AnswerFeatureType {
  detailId: number;
  setComment: Dispatch<SetStateAction<string>>;
  comment: string;
}
