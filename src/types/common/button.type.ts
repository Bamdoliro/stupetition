import { ButtonHTMLAttributes } from 'react';

export type ButtonOptionType = 'UNFILLED' | 'FILLED' | 'SCARCE_FILLED';

export interface ButtonPropsType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  padding?: string;
  width?: string;
  option: ButtonOptionType;
}
