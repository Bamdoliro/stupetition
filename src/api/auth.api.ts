import { customAxios } from 'lib/axios/customAxios';
import { LoginType } from 'types/auth.type';

/** 학생회 로그인 */
export const loginUser = async (loginData: LoginType) => {
  const { data } = await customAxios.post('/auth', loginData);
  return data;
};

/** 구글 로그인하러 가는 링크 반환 */
export const getGoogleAuthLink = async () => {
  const { data } = await customAxios.get('/auth/google');
  return data;
};

/** 구글 로그인 */
export const authGoogle = async (code: string) => {
  const { data } = await customAxios.post(`/auth/google/callback?code=${code}`);
  return data;
};
