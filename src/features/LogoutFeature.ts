import { useMutation } from 'react-query';
import { logoutUser } from 'api/user.api';
import { useSetRecoilState } from 'recoil';
import { userEmpty, userState } from 'atoms/user.atom';
import { useCallback } from 'react';

export const useLogoutMutation = useCallback(() => {
  const setUser = useSetRecoilState(userState);

  return useMutation(logoutUser, {
    onSuccess: () => {
      localStorage.clear();
      setUser(userEmpty);
      window.location.href = '/';
    },
  });
}, []);
