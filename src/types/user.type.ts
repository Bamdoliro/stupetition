export type Authority = 'STUDENT_COUNCIL' | 'STUDENT';

export interface UpdatePasswordType {
  currentPassword: string;
  password: string;
  rePassword: string;
}

export interface UserInfoType {
  authority: string;
  username: string;
  schoolName: string;
}
