import { userState } from 'atoms/user.atom';
import { GetUserDataFeature } from 'features/user/getUserData.feature';
import { useRecoilValue } from 'recoil';

export const useUser = () => {
  const userAtom = useRecoilValue(userState);
  const { data: user } = GetUserDataFeature();

  console.log(user);

  return { user };
};
