import { useUser } from 'hooks/useUser';

export const EmailReplace = () => {
  const { user } = useUser();

  const email = user.email.replace('@bssm.hs.kr', '');

  console.log(email);

  return { email };
};
