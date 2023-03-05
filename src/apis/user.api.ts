import { customAxios } from 'lib/axios/customAxios';
import { authorization } from 'lib/token/authorization';
import { GenerateStudnetsType } from 'types/user.type';

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

// 학생 아이디 생성

export const generateStudnets = async (
  generateStudnetsData: GenerateStudnetsType,
) => {
  await customAxios.post(
    '/user/students',
    generateStudnetsData,
    authorization(),
  );
};
