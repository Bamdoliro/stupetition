import { customAxios } from 'lib/axios/customAxios';
import { authorization } from 'lib/token/authorization';

interface UpdatePasswordParamsType {
  currentPassword: string;
  password: string;
}

interface GenerateStudnetsParamsType {
  admissionYear: number;
  defaultPassword: string;
  numberOfStudents: number;
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
  generateStudnetsData: GenerateStudnetsParamsType,
) => {
  const { data } = await customAxios.post(
    '/user/student',
    generateStudnetsData,
    authorization(),
  );
  return data;
};
