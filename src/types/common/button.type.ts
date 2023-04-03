import { ButtonHTMLAttributes } from 'react';

export type ButtonOptionType = 'FILLED' | 'UNFILLED';

export type MiniButtonOptionType = 'FILLED' | 'UNFILLED';

export interface ButtonPropsType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  padding?: string;
  width?: string;
  option: ButtonOptionType;
}
