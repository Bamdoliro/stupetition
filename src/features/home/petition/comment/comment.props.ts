import { Dispatch, SetStateAction } from 'react';

export interface CommentFeatureType {
  detailId: number;
  setComment: Dispatch<SetStateAction<string>>;
  comment: string;
}
