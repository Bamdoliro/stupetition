export interface ButtonPropsType {
  value: string;
  padding?: string;
  width?: string;
  option: 'UNFILLED' | 'FILLED';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
