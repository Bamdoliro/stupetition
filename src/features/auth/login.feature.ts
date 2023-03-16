import { useNavigate } from 'react-router-dom';
import { ACCESS_KEY, REFRESH_KEY } from 'constants/token.constant';
import { useMutation } from 'react-query';
import { loginUser } from 'apis/auth.api';
import { useSetRecoilState } from 'recoil';
import { tokenState } from 'atoms/user.atom';
import { LoginType } from 'types/auth.type';
import { toast } from 'react-toastify';

export const LoginFeature = (loginData: LoginType) => {
  const navigate = useNavigate();
  const setTokenData = useSetRecoilState(tokenState);

  const loginMutate = useMutation(loginUser, {
    onSuccess: (res) => {
      const { accessToken, refreshToken } = res;

      localStorage.setItem(ACCESS_KEY, accessToken);
      localStorage.setItem(REFRESH_KEY, refreshToken);
      setTokenData({ accessToken, refreshToken });
      toast.success('로그인 성공');
      navigate('/');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const login = () => {
    loginMutate.mutate(loginData);
  };

  return { login };
};
