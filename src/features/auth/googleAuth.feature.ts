import { useMutation, useQuery } from 'react-query';
import { authGoogle, getGoogleAuthLink } from 'api/auth.api';
import * as KEY from 'constants/key.constant';
import queryString from 'query-string';
import { useEffect } from 'react';
import { Storage } from 'lib/storage/storage';
import { ACCESS_KEY, REFRESH_KEY } from 'constants/token.constant';
import { toast } from 'react-toastify';

export const GoogleAuthLink = () => {
  const { data } = useQuery([KEY.GOOGLE_AUTH_LINK], getGoogleAuthLink);

  const google = () => {
    window.location.replace(data);
  };

  return { google };
};

export const GoogleAuth = () => {
  const { mutate } = useMutation(authGoogle, {
    onSuccess: (res) => {
      const { accessToken, refreshToken } = res;

      Storage.setItem(ACCESS_KEY, accessToken);
      Storage.setItem(REFRESH_KEY, refreshToken);
      window.location.href = '/';
    },
    onError: () => {
      toast.error('로그인 오류');
    },
  });

  useEffect(() => {
    const q = queryString.parse(window.location.search);
    if (q.code !== undefined && typeof q.code === 'string') {
      mutate(q.code);
    }
  }, []);
};
