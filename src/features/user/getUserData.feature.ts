import * as KEY from 'constants/key.constant';
import { useQuery } from 'react-query';
import { getUserData } from 'apis/user.api';
import { UserDataType } from 'types/user.type';
import { ACCESS_KEY } from 'constants/token.constant';

export const GetUserDataFeature = () => {
  const { data, isFetching } = useQuery<UserDataType>(
    [KEY.USER],
    () => getUserData(),
    {
      enabled: !!localStorage.getItem(ACCESS_KEY),
    },
  );

  return { data, isFetching };
};
