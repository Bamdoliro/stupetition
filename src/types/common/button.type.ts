import React from 'react';

export interface ButtonPropsType {
  value?: string;
  padding?: string;
  width?: string;
  option: 'UNFILLED' | 'FILLED' | 'SCARCE_FILLED';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
