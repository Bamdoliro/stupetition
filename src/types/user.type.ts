export type Authority = 'STUDENT_COUNCIL' | 'STUDENT';

export interface UserInfoType {
  authority: string;
  email: string;
  schoolName: string;
}
