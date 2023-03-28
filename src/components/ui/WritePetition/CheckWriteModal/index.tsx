import MiniButton from 'components/common/MiniButton';
import PetitionList from 'components/common/PetitionList';
import { MouseEventHandler } from 'react';
import { WritePetitionType } from 'types/petition.type';
import { WriteFeature } from 'features/posts/write.feature';
import * as S from './style';

interface PropsType {
  close: MouseEventHandler<HTMLButtonElement>;
  petitionData: WritePetitionType;
  isOpenCheckWriteModal: boolean;
}

const CheckWriteModal = ({
  close,
  petitionData,
  isOpenCheckWriteModal,
}: PropsType) => {
  const { write } = WriteFeature(petitionData);

  const date = {
    year: new Date().getFullYear(),
    month: (new Date().getMonth() + 1).toString().padStart(2, '0'),
    day: new Date().getDay().toString().padStart(2, '0'),
  };

  return (
    <S.BlurBackground display={isOpenCheckWriteModal ? 'flex' : 'none'}>
      <S.CheckWriteModal>
        <S.CheckWriteModalWrap>
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
        </S.CheckWriteModalWrap>
      </S.CheckWriteModal>
    </S.BlurBackground>
  );
};

export default CheckWriteModal;
