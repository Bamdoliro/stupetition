import { useMutation } from 'react-query';
import { logoutUser } from 'apis/auth.api';

export const LogoutFeature = () => {
  const logoutMutate = useMutation(logoutUser, {
    onSuccess: () => {
      localStorage.clear();
      window.location.reload();
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const logout = () => {
    logoutMutate.mutate();
  };

  return { logout };
};
