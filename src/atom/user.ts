import { getAuthority, getSchoolName } from 'lib/storage/user';
import { atom } from 'recoil';

export const userData = atom({
  key: 'user',
  default: {
    authority: getAuthority(),
    schoolName: getSchoolName(),
  },
});
