export interface InputPropsType {
  desc?: string;
  type: string;
  name: string;
  placeholder: string;
  value?: string;
  width?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
}
