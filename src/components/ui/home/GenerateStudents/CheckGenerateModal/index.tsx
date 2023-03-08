import MiniButton from 'components/common/MiniButton';
import { MouseEventHandler, useState } from 'react';
import { GenerateStudnetsType } from 'types/user.type';
import Preview from '../Preview';
import * as S from './style';

interface CheckGenerateModalPropsType {
  close: MouseEventHandler<HTMLButtonElement>;
  isOpenCheckGenerateModal: boolean;
  generateStudentsData: GenerateStudnetsType;
}

const CheckGenerateModal = ({
  close,
  isOpenCheckGenerateModal,
  generateStudentsData,
}: CheckGenerateModalPropsType) => {
  const [isOpenPreview, setIsOpenPreview] = useState(false);
  const { admissionYear, numberOfStudents } = generateStudentsData;
  const grade = new Date().getFullYear() + 1 - admissionYear;

  return (
    <>
      <S.BlurBackground display={isOpenCheckGenerateModal ? 'flex' : 'none'}>
        <S.CheckGenerateModal>
          <S.CheckGenerateModalWrap>
            <S.TextBox>
              <S.Title>아이디 생성 완료!</S.Title>
              <S.Content>
                {grade}학년 학생 {numberOfStudents}명의 아이디를 생성했습니다
              </S.Content>
            </S.TextBox>
            <S.ButtonBox>
              <MiniButton option="FILLED" value="확인" onClick={close} />
              <MiniButton
                option="UNFILLED"
                value="인쇄용 png 다운로드"
                onClick={() => setIsOpenPreview(true)}
              />
            </S.ButtonBox>
          </S.CheckGenerateModalWrap>
        </S.CheckGenerateModal>
      </S.BlurBackground>
      <Preview
        isOpenPreview={isOpenPreview}
        setIsOpenPreview={setIsOpenPreview}
      />
    </>
  );
};

export default CheckGenerateModal;
