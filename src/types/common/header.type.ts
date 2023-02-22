import { Dispatch, SetStateAction } from 'react';

export interface ProfilePopoverPropsType {
  isOpen: boolean;
  close: Dispatch<SetStateAction<boolean>>;
}
