import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonPropsType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  padding?: string;
  width?: string;
  option: 'UNFILLED' | 'FILLED' | 'SCARCE_FILLED';
}
