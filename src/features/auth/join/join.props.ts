import { Dispatch, SetStateAction } from 'react';
import { JoinType } from 'types/auth/auth.type';

export interface JoinFeatureType {
  setJoinData: Dispatch<SetStateAction<JoinType>>;
  joinData: JoinType;
}
