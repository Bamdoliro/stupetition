import { Dispatch, SetStateAction } from 'react';
import { UseQueryResult } from 'react-query';

export interface AnswerFeatureType {
  detailId: number;
  setComment: Dispatch<SetStateAction<string>>;
  comment: string;
}
