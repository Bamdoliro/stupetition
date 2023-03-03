import { ACCESS_KEY, REQUEST_KEY } from 'constants/token.constant';
import { customAxios } from 'lib/axios/customAxios';
import { authorization } from 'lib/token/authorization';

interface UpdatePasswordParamsType {
  currentPassword: string;
  password: string;
}

// 비밀번호 변경

export const updatePassword = async (
  updatePasswordData: UpdatePasswordParamsType,
) => {
  await customAxios.put(
    '/user/update/password',
    updatePasswordData,
    authorization(),
  );
};

// 아이디 삭제

export const deleteUser = async (password: string) => {
  await customAxios.delete('/user', {
    data: {
      password,
    },
    headers: {
      [REQUEST_KEY]: `Bearer ${localStorage.getItem(ACCESS_KEY)}`,
    },
  });
};
