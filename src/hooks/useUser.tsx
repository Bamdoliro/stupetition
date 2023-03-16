import { GetUserDataFeature } from 'features/user/getUserData.feature';

export const useUser = () => {
  const { user } = GetUserDataFeature();

  console.log(user);

  return {
    user: user || {
      authority: '',
      username: '',
      schoolName: '',
    },
  };
};
