import { useMutation, useQuery } from 'react-query';
import { authGoogle, getGoogleAuthLink } from 'api/auth.api';
import * as KEY from 'constants/key.constant';
import { Storage } from 'lib/storage/storage';
import { ACCESS_KEY, REFRESH_KEY } from 'constants/token.constant';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export const GoogleLoginFeature = () => {
  const useGoogleLink = () =>
    useQuery([KEY.GOOGLE_AUTH_LINK], getGoogleAuthLink);

  const useGoogleLoginMutation = useCallback(() => {
    const navigate = useNavigate();

    return useMutation(authGoogle, {
      onSuccess: (res) => {
        const { accessToken, refreshToken } = res;

        Storage.setItem(ACCESS_KEY, accessToken);
        Storage.setItem(REFRESH_KEY, refreshToken);
        toast.success('로그인 성공');
        navigate('/');
      },
      onError: () => {
        toast.error('학교 계정으로 로그인 해주세요');
        navigate('/login');
      },
    });
  }, []);

  return {
    useGoogleLink,
    useGoogleLoginMutation,
  };
};
