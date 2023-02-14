import { ACCESS_KEY, REFRESH_KEY } from 'lib/config/token.config';
import { AUTHORITY, SCHOOL_NAME } from 'lib/config/user.config';
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
