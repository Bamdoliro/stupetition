import MiniButton from 'components/common/MiniButton';
import PetitionList from 'components/common/PetitionList';
import { MouseEventHandler } from 'react';
import { WritePetitionType } from 'types/petition.type';
import { WriteFeature } from 'features/home/write.feature';
import * as S from './style';

interface CheckPetitionModalPropsType {
  close: MouseEventHandler<HTMLButtonElement>;
  petitionData: WritePetitionType;
  isOpenCheckPetitionModal: boolean;
}

const CheckPetitionModal = ({
  close,
  petitionData,
  isOpenCheckPetitionModal,
}: CheckPetitionModalPropsType) => {
  const { write } = WriteFeature(petitionData);

  const date = {
    year: new Date().getFullYear(),
    month: (new Date().getMonth() + 1).toString().padStart(2, '0'),
    day: new Date().getDay().toString().padStart(2, '0'),
  };

  return (
    <S.BlurBackground display={isOpenCheckPetitionModal ? 'flex' : 'none'}>
      <S.CheckPetitionModal>
        <S.CheckPetitionModalWrap>
          <S.Title>최종 확인</S.Title>
          <S.PreviewBox>
            <S.Preview>썸네일 미리보기</S.Preview>
            <PetitionList
              option="MODAL"
              id={0}
              status="ANSWERED"
              title={petitionData.title}
              numberOfApprover={0}
              createdAt={`${date.year}-${date.month}-${date.day}`}
            />
          </S.PreviewBox>
          <S.ButtonBox>
            <MiniButton option="UNFILLED" value="닫기" onClick={close} />
            <MiniButton option="FILLED" value="청원 게시" onClick={write} />
          </S.ButtonBox>
        </S.CheckPetitionModalWrap>
      </S.CheckPetitionModal>
    </S.BlurBackground>
  );
};

export default CheckPetitionModal;
