import { atom } from 'recoil';
import { JoinType } from 'type/auth/auth.type';

export const joinData = atom<JoinType>({
  key: 'join',
  default: {
    email: '',
    password: '',
    rePassword: '',
    schoolId: 0,
    schoolName: '',
  },
});
