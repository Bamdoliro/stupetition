import { useMutation } from 'react-query';
import { logoutUser } from 'api/user.api';
import { useSetRecoilState } from 'recoil';
import { userEmpty, userState } from 'atoms/user.atom';

export const LogoutFeature = () => {
  const setUser = useSetRecoilState(userState);

  const { mutate } = useMutation(logoutUser, {
    onSuccess: () => {
      localStorage.clear();
      setUser(userEmpty);
    },
  });

  const logout = () => {
    mutate();
  };

  return { logout };
};
