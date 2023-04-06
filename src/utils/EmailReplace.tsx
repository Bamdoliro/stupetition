export const EmailReplace = (email: string) => {
  const userEmail = email.replace('@bssm.hs.kr', '');

  return { userEmail };
};
