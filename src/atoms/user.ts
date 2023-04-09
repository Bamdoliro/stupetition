import { userEmpty } from 'fixtures';
import { atom } from 'recoil';
import { UserInfoType } from 'types/user.type';

export const userState = atom<UserInfoType>({
  key: 'user',
  default: userEmpty,
});
