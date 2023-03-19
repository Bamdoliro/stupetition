import { generateStudnets } from 'apis/user.api';
import { generateListState } from 'atoms/generateList.atom';
import { useModal } from 'hooks/useModal';
import { Dispatch, SetStateAction } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';
import { GenerateStudnetsType } from 'types/user.type';

interface PropsType {
  generateStudentsData: GenerateStudnetsType;
  setIsOpenCheckGenerateModal: Dispatch<SetStateAction<boolean>>;
}

export const GenerateStudentsFeature = ({
  generateStudentsData,
  setIsOpenCheckGenerateModal,
}: PropsType) => {
  const setGenerateListData = useSetRecoilState(generateListState);
  const openCheckGenerateModal = () => setIsOpenCheckGenerateModal(true);
  const { closeModal } = useModal();

  const { mutate, isLoading } = useMutation(generateStudnets, {
    onSuccess: (res) => {
      setGenerateListData(res);
      openCheckGenerateModal();
    },
    onError: (err) => {
      console.log(err);
      toast.error('학생 아이디 생성중 오류 발생');
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
      toast.error('비밀번호가 맞지 않습니다');
    }
  };

  return { generate, isLoading };
};
