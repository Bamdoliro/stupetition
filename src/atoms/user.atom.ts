import { ACCESS_KEY, REFRESH_KEY } from 'constants/token.constant';
import { atom } from 'recoil';

interface TokenStateType {
  accessToken: string;
  refreshToken: string;
}

export const tokenState = atom<TokenStateType>({
  key: 'token',
  default: {
    accessToken: localStorage.getItem(ACCESS_KEY) || '',
    refreshToken: localStorage.getItem(REFRESH_KEY) || '',
  },
});
