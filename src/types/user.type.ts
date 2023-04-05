export type Authority = 'STUDENT_COUNCIL' | 'STUDENT';

export interface UserInfoType {
  authority: string;
  username: string;
  schoolName: string;
}
