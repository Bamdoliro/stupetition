import { ACCESS_KEY, REFRESH_KEY } from 'constants/token.constant';
import { atom } from 'recoil';

interface TokenStateType {
  accessToken: string;
  refreshToken: string;
}

interface UserStateType {
  authority: string;
  schoolName: string;
  username: string;
}

export const tokenState = atom<TokenStateType>({
  key: 'token',
  default: {
    accessToken: localStorage.getItem(ACCESS_KEY) || '',
    refreshToken: localStorage.getItem(REFRESH_KEY) || '',
  },
});

export const userState = atom<UserStateType>({
  key: 'user',
  default: {
    authority: '',
    schoolName: '',
    username: '',
  },
});
