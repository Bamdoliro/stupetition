import { ButtonHTMLAttributes } from 'react';

export type ButtonOptionType = 'FILLED' | 'UNFILLED';

export type MiniButtonOptionType = 'FILLED' | 'UNFILLED' | 'SCARCE_FILLED';

export interface ButtonPropsType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  padding?: string;
  width?: string;
  option: ButtonOptionType;
}

export interface MiniButtonPropsType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  option: MiniButtonOptionType;
}
