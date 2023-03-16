import * as KEY from 'constants/key.constant';
import { useQuery } from 'react-query';
import { getUserData } from 'apis/user.api';
import { UserDataType } from 'types/user.type';
import { Storage } from 'lib/storage/storage';
import { ACCESS_KEY } from 'constants/token.constant';

export const useUser = () => {
  const { data: user } = useQuery<UserDataType>(
    [KEY.USER],
    () => getUserData(),
    {
      enabled: !!Storage.getItem(ACCESS_KEY),
    },
  );

  return {
    user: user || {
      authority: null,
      username: null,
      schoolName: null,
    },
  };
};
