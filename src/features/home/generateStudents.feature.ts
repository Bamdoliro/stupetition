import { generateStudnets } from 'apis/user.api';
import { useSuccesToast } from 'hooks/useToast';
import { useMutation } from 'react-query';
import { GenerateStudnetsType } from 'types/user.type';

export const GenerateStudentsFeature = (
  generateStudentsData: GenerateStudnetsType,
) => {
  const { mutate } = useMutation(generateStudnets, {
    onSuccess: () => {
      useSuccesToast('생성 완료');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const generate = () => {
    mutate(generateStudentsData);
  };

  return { generate };
};
