import { MouseEventHandler } from 'react';

export type ModalOptionType = 'CONFIRM' | 'ALERT';

export interface ModalPropsType {
  option: ModalOptionType;
  title: string;
  content: string;
  canceltext: string;
  checktext: string;
  cancel: MouseEventHandler<HTMLButtonElement>;
  check: MouseEventHandler<HTMLButtonElement>;
}
