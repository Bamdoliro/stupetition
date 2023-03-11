import Input from 'components/common/Input';
import { ChangeEvent, useState } from 'react';
import MiniButton from 'components/common/MiniButton';
import { GenerateStudentsFeature } from 'features/user/generateStudents.feature';
import { GenerateStudnetsType } from 'types/user.type';
import Modal from 'components/common/Modal';
import { useModal } from 'hooks/useModal';
import { useErrorToast } from 'hooks/useToast';
import { useNavigate } from 'react-router-dom';
import Loading from 'pages/Loading';
import CheckGenerateModal from './CheckGenerateModal';
import * as S from './style';

const GenerateStudnets = () => {
  const navigate = useNavigate();
  const { openModal, closeModal } = useModal();
  const [generateStudentsData, setGenerateStudentsData] =
    useState<GenerateStudnetsType>({
      admissionYear: 0,
      defaultPassword: '',
      reDefaultPassword: '',
      numberOfStudents: 0,
    });
  const [isOpenCheckGenerateModal, setIsOpenCheckGenerateModal] =
    useState(false);
  const { generate, isLoading } = GenerateStudentsFeature({
    generateStudentsData,
    setIsOpenCheckGenerateModal,
  });
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGenerateStudentsData({ ...generateStudentsData, [name]: value });
  };

  const generateStudents = () => {
    const { admissionYear, numberOfStudents } = generateStudentsData;
    const grade = new Date().getFullYear() + 1 - admissionYear;
    if (new Date().getFullYear() < admissionYear) {
      useErrorToast('입학년도를 다시 한번 확인해주세요');
      return;
    }
    openModal(
      <Modal
        option="CONFIRM"
        title="학생 아이디 생성"
        content={`${grade}학년 학생 ${numberOfStudents}명의 아이디 생성이 맞는지 다시 한번 확인해주세요`}
        closeText="취소"
        confirmText="생성"
        handleClose={closeModal}
        handleConfirm={generate}
      />,
    );
  };

  const closeGenerateModal = () => {
    setIsOpenCheckGenerateModal(false);
    navigate('/');
  };

  return (
    <>
      {isLoading && <Loading />}
      <S.GenerateStudentsLayout>
        <S.GenerateStudentsWrap>
          <S.GenerateStudentsBox>
            <S.Title>학생 아이디 생성</S.Title>
            <S.ColInputWrap>
              <Input
                desc="입학년도"
                placeholder="20XX"
                type="number"
                name="admissionYear"
                onChange={onChange}
              />
              <Input
                desc="학생 수"
                placeholder="최대 400명"
                type="number"
                name="numberOfStudents"
                onChange={onChange}
              />
            </S.ColInputWrap>
            <S.RowInputWrap>
              <S.InputWrap>
                <Input
                  desc="초기 비밀번호"
                  placeholder="20자 이내"
                  type="password"
                  name="defaultPassword"
                  onChange={onChange}
                />
              </S.InputWrap>
              <S.InputWrap>
                <Input
                  desc="비밀번호 재입력"
                  placeholder="20자 이내"
                  type="password"
                  name="reDefaultPassword"
                  onChange={onChange}
                />
              </S.InputWrap>
            </S.RowInputWrap>
            <MiniButton
              onClick={generateStudents}
              option="FILLED"
              width="225px"
              value="계정 생성"
            />
          </S.GenerateStudentsBox>
        </S.GenerateStudentsWrap>
      </S.GenerateStudentsLayout>
      <CheckGenerateModal
        isOpenCheckGenerateModal={isOpenCheckGenerateModal}
        close={closeGenerateModal}
        generateStudentsData={generateStudentsData}
      />
    </>
  );
};

export default GenerateStudnets;
