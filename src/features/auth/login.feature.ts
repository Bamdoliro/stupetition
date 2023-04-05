import { useNavigate } from 'react-router-dom';
import { ACCESS_KEY, REFRESH_KEY } from 'constants/token.constant';
import { useMutation } from 'react-query';
import { loginUser } from 'api/auth.api';
import { LoginType } from 'types/auth.type';
import { Storage } from 'lib/storage/storage';
import { toast } from 'react-toastify';

export const LoginFeature = (loginData: LoginType) => {
  const navigate = useNavigate();

  const { mutate } = useMutation(loginUser, {
    onSuccess: (res) => {
      const { accessToken, refreshToken } = res;

      Storage.setItem(ACCESS_KEY, accessToken);
      Storage.setItem(REFRESH_KEY, refreshToken);
      toast.success('로그인 성공');
      navigate('/');
    },
  });

  const login = () => {
    mutate(loginData);
  };

  return { login };
};
