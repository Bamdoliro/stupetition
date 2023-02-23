import { Dispatch, SetStateAction } from 'react';

export interface AnswerFeatureType {
  id: number;
  setComment: Dispatch<SetStateAction<string>>;
  comment: string;
}
