import { useNavigate } from 'react-router-dom';
import { AUTHORITY, SCHOOL_NAME } from 'constants/user.constant';
import { ACCESS_KEY, REFRESH_KEY } from 'constants/token.constant';
import { useMutation } from 'react-query';
import { loginUser } from 'apis/auth.api';
import { useSetRecoilState } from 'recoil';
import { userState } from 'atoms/user.atom';
import { LoginType } from 'types/auth.type';

interface LoginFeatureType {
  loginData: LoginType;
}

export const LoginFeature = ({ loginData }: LoginFeatureType) => {
  const navigate = useNavigate();
  const setUserData = useSetRecoilState(userState);

  const loginMutate = useMutation(loginUser, {
    onSuccess: (res) => {
      const { accessToken, refreshToken } = res;
      const { authority, schoolName, email } = res.user;

      localStorage.setItem(AUTHORITY, authority);
      localStorage.setItem(SCHOOL_NAME, schoolName);
      localStorage.setItem(ACCESS_KEY, accessToken);
      localStorage.setItem(REFRESH_KEY, refreshToken);
      setUserData({ accessToken, refreshToken, authority, schoolName, email });

      alert('로그인 성공 !!');
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
