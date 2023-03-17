import { InputHTMLAttributes } from 'react';

export interface InputPropsType extends InputHTMLAttributes<HTMLInputElement> {
  desc?: string;
  width?: string;
  height?: string;
}
