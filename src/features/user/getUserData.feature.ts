import * as KEY from 'constants/key.constant';
import { useQuery } from 'react-query';
import { getUserData } from 'apis/user.api';
import { UserDataType } from 'types/user.type';

export const GetUserDataFeature = () => {
  const { isLoading, isError, data } = useQuery<UserDataType>([KEY.USER], () =>
    getUserData(),
  );
};
