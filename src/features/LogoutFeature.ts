import { useMutation } from 'react-query';
import { logoutUser } from 'api/user.api';
import { useSetRecoilState } from 'recoil';
import { userState } from 'atoms/user';
import { useNavigate } from 'react-router-dom';
import { userEmpty } from 'fixtures';

/** 로그아웃 */
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
