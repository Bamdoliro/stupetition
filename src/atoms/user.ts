import { ACCESS_KEY, REFRESH_KEY } from 'constants/token.constant';
import { AUTHORITY, SCHOOL_NAME } from 'constants/user.constant';
import { atom } from 'recoil';

export const userData = atom({
  key: 'user',
  default: {
    accessToken: localStorage.getItem(ACCESS_KEY),
    refreshToken: localStorage.getItem(REFRESH_KEY),
    authority: localStorage.getItem(AUTHORITY),
    schoolName: localStorage.getItem(SCHOOL_NAME),
  },
});
