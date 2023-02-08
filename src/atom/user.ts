import { getAuthority, getSchoolName } from 'lib/storage/user';
import { getAccessToken, getRefreshToken } from 'lib/storage/token';
import { atom } from 'recoil';

export const userData = atom({
  key: 'user',
  default: {
    accessToken: getAccessToken(),
    refreshToken: getRefreshToken(),
    authority: getAuthority(),
    schoolName: getSchoolName(),
  },
});
