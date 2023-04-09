import { atom } from 'recoil';
import { UserInfoType } from 'types/user.type';

export const userEmpty: UserInfoType = {
  authority: '',
  email: '',
  schoolName: '',
  name: '',
};

export const userState = atom<UserInfoType>({
  key: 'user',
  default: userEmpty,
});
