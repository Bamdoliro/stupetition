import { ACCESS_KEY, REFRESH_KEY } from 'constants/token.constant';
import { AUTHORITY, SCHOOL_NAME, USER_ID } from 'constants/user.constant';
import { atom } from 'recoil';
import { UserDataType } from 'types/user.type';

export const userData = atom<UserDataType>({
  // userId 개애매함..
  key: 'user',
  default: {
    accessToken: localStorage.getItem(ACCESS_KEY) || '',
    refreshToken: localStorage.getItem(REFRESH_KEY) || '',
    authority: localStorage.getItem(AUTHORITY) || '',
    schoolName: localStorage.getItem(SCHOOL_NAME) || '',
    userId: localStorage.getItem(USER_ID) || '',
  },
});
