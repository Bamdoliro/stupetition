import React from 'react';

export interface ButtonPropsType {
  padding?: string;
  width?: string;
  option: 'UNFILLED' | 'FILLED';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  element: React.ReactNode;
}
