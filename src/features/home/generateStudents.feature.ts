import { generateStudnets } from 'apis/user.api';
import { generateListState } from 'atoms/generateList.atom';
import { useModal } from 'hooks/useModal';
import { useErrorToast } from 'hooks/useToast';
import { Dispatch, SetStateAction } from 'react';
import { useMutation } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { GenerateStudnetsType } from 'types/user.type';

interface GenerateStudentsFeaturePropsType {
  generateStudentsData: GenerateStudnetsType;
  setIsOpenCheckGenerateModal: Dispatch<SetStateAction<boolean>>;
}

export const GenerateStudentsFeature = ({
  generateStudentsData,
  setIsOpenCheckGenerateModal,
}: GenerateStudentsFeaturePropsType) => {
  const setGenerateListData = useSetRecoilState(generateListState);
  const openCheckGenerateModal = () => setIsOpenCheckGenerateModal(true);
  const { closeModal } = useModal();

  const { mutate, isLoading } = useMutation(generateStudnets, {
    onSuccess: (res) => {
      console.log(res);
      setGenerateListData(res);
      openCheckGenerateModal();
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
      closeModal();
    } else {
      useErrorToast('비밀번호가 맞지 않습니다');
    }
  };

  return { generate, isLoading };
};
