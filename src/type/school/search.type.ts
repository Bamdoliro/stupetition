export interface SchoolType {
  name: string;
  id: number;
  emailDomain?: string;
}

export interface SchoolListType {
  name: string;
  id: number;
  emailDomain?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
