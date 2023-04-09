import { useMutation } from 'react-query';
import { logoutUser } from 'api/user.api';
import { useSetRecoilState } from 'recoil';
import { userEmpty, userState } from 'atoms/user.atom';
import { useNavigate } from 'react-router-dom';

export const useLogoutMutation = () => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);

  return useMutation(logoutUser, {
    onSuccess: () => {
      localStorage.clear();
      setUser(userEmpty);
      navigate('/');
    },
  });
};
