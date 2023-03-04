export interface UserDataType {
  accessToken: string;
  refreshToken: string;
  authority: string;
  schoolName: string;
  username: string;
}

export type Authority = 'STUDENT_COUNCIL' | 'STUDENT';

export interface UpdatePasswordType {
  currentPassword: string;
  password: string;
  rePassword: string;
}
