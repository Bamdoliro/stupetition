export interface ButtonPropsType {
  value: string;
  width: string;
  option: 'UNFILLED' | 'FILLED';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
