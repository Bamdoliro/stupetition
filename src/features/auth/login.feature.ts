import { useNavigate } from 'react-router-dom';
import { AUTHORITY, SCHOOL_NAME, USER_NAME } from 'constants/user.constant';
import { ACCESS_KEY, REFRESH_KEY } from 'constants/token.constant';
import { useMutation } from 'react-query';
import { loginUser } from 'apis/auth.api';
import { useSetRecoilState } from 'recoil';
import { userState } from 'atoms/user.atom';
import { LoginType } from 'types/auth.type';
import { useSuccesToast } from 'hooks/useToast';

interface LoginFeatureType {
  loginData: LoginType;
}

export const LoginFeature = ({ loginData }: LoginFeatureType) => {
  const navigate = useNavigate();
  const setUserData = useSetRecoilState(userState);

  const loginMutate = useMutation(loginUser, {
    onSuccess: (res) => {
      const { accessToken, refreshToken } = res;
      const { authority, schoolName, username } = res.user;

      localStorage.setItem(AUTHORITY, authority);
      localStorage.setItem(SCHOOL_NAME, schoolName);
      localStorage.setItem(ACCESS_KEY, accessToken);
      localStorage.setItem(REFRESH_KEY, refreshToken);
      localStorage.setItem(USER_NAME, username);
      setUserData({
        accessToken,
        refreshToken,
        authority,
        schoolName,
        username,
      });
      useSuccesToast('로그인 성공');
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
