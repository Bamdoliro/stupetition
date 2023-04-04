import * as KEY from 'constants/key.constant';
import { useQuery } from 'react-query';
import { getUserInfo } from 'api/user.api';
import { UserInfoType } from 'types/user.type';
import { Storage } from 'lib/storage/storage';
import { ACCESS_KEY } from 'constants/token.constant';
import { useRecoilState } from 'recoil';
import { userState } from 'atoms/user.atom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useUser = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const { data: user } = useQuery<UserInfoType>(
    [KEY.USER],
    () => getUserInfo(),
    {
      enabled: !!Storage.getItem(ACCESS_KEY),
    },
  );

  useEffect(() => {
    if (user) setUserInfo(user);
  }, [setUserInfo, user, navigate]);

  return { user: userInfo };
};
