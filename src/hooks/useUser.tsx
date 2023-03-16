import { GetUserDataFeature } from 'features/user/getUserData.feature';

export const useUser = () => {
  const { user } = GetUserDataFeature();

  return {
    user: user || {
      authority: null,
      username: null,
      schoolName: null,
    },
  };
};
