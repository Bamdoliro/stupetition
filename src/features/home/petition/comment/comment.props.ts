import { Dispatch, SetStateAction } from 'react';

export interface CommentFeatureType {
  id: number;
  setComment: Dispatch<SetStateAction<string>>;
  comment: string;
}
