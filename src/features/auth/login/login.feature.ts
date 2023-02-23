import { useNavigate } from 'react-router-dom';
import { AUTHORITY, SCHOOL_NAME } from 'constants/user.constant';
import { ACCESS_KEY, REFRESH_KEY } from 'constants/token.constant';
import { useMutation } from 'react-query';
import { loginUser } from 'apis/auth.api';
import { useSetRecoilState } from 'recoil';
import { userData } from 'atoms/user.atom';
import { LoginFeatureType } from './login.props';

export const LoginFeature = ({ loginData }: LoginFeatureType) => {
  const navigate = useNavigate();
  const setUserData = useSetRecoilState(userData);

  const loginMutate = useMutation(loginUser, {
    onSuccess: (res) => {
      localStorage.setItem(AUTHORITY, res.user.authority);
      localStorage.setItem(SCHOOL_NAME, res.user.schoolName);
      localStorage.setItem(ACCESS_KEY, res.accessToken);
      localStorage.setItem(REFRESH_KEY, res.refreshToken);
      setUserData({
        accessToken: res.accessToken,
        refreshToken: res.refreshToken,
        authority: res.user.authority,
        schoolName: res.user.schoolName,
      });

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
