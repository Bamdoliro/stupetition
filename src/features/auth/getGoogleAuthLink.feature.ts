import { useQuery } from 'react-query';
import { getGoogleAuthLink } from 'api/auth.api';
import * as KEY from 'constants/key.constant';

export const GoogleAuthLink = () => {
  const { data } = useQuery([KEY.GOOGLE_AUTH_LINK], getGoogleAuthLink);

  const google = () => {
    window.location.href = data;
  };

  return { google };
};
