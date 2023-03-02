export interface UserDataType {
  accessToken: string;
  refreshToken: string;
  authority: string;
  schoolName: string;
  email: string;
}

export interface UpdatePasswordType {
  currentPassword: string;
  password: string;
  rePassword: string;
}
