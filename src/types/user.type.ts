export type Authority = 'STUDENT_COUNCIL' | 'STUDENT';

export interface UpdatePasswordType {
  currentPassword: string;
  password: string;
  rePassword: string;
}

export interface GenerateStudnetsType {
  admissionYear: number;
  defaultPassword: string;
  numberOfStudents: number;
  reDefaultPassword: string;
}

export interface GenerateStudentsListType {
  username: string;
  password: string;
}

export interface UserInfoType {
  authority: string;
  username: string;
  schoolName: string;
}
