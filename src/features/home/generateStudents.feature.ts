import { generateStudnets } from 'apis/user.api';
import { useErrorToast, useSuccesToast } from 'hooks/useToast';
import { useMutation } from 'react-query';
import { GenerateStudnetsType } from 'types/user.type';

export const GenerateStudentsFeature = (
  generateStudentsData: GenerateStudnetsType,
) => {
  const { mutate } = useMutation(generateStudnets, {
    onSuccess: (res) => {
      console.log(res);
      useSuccesToast('생성 완료');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const generate = () => {
    const {
      admissionYear,
      defaultPassword,
      numberOfStudents,
      reDefaultPassword,
    } = generateStudentsData;

    if (reDefaultPassword === defaultPassword) {
      mutate({
        admissionYear,
        defaultPassword,
        numberOfStudents,
      });
    } else {
      useErrorToast('비밀번호가 맞지 않습니다');
    }
  };

  return { generate };
};
