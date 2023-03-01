import { customAxios } from 'lib/axios/customAxios';
import { authorization } from 'lib/token/authorization';

interface UpdatePasswordParamsType {
  currentPassword: string;
  password: string;
}

// 비밀번호 변경

export const postUpdatePassword = async (
  updatePasswordData: UpdatePasswordParamsType,
) => {
  await customAxios.put(
    '/user/update/password',
    updatePasswordData,
    authorization(),
  );
};
