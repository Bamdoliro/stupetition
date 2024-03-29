import MiniButton from 'components/common/MiniButton';
import PetitionList from 'components/PetitionList';
import { MouseEventHandler } from 'react';
import { WritePetitionType } from 'types/petition.type';
import { useCreatePetition } from 'features/WritePetitionFeature';
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
  const writePetitionMutate = useCreatePetition(petitionData);

  const date = {
    year: new Date().getFullYear(),
    month: (new Date().getMonth() + 1).toString().padStart(2, '0'),
    day: new Date().getDay().toString().padStart(2, '0'),
  };

  return (
    <S.BlurBackground display={isOpenCheckWriteModal ? 'flex' : 'none'}>
      <S.CheckWriteModal>
        <S.CheckWriteModalWrap>
          <S.InfoBox>
            <S.Title>최종 확인</S.Title>
            <S.Warning>
              ⚠️ 남을 비방하는 말이나 부적절한 언어, 욕이 포함돼있을 경우
              처벌받을 수 있습니다.
            </S.Warning>
          </S.InfoBox>
          <S.PreviewBox>
            <S.Preview>썸네일 미리보기</S.Preview>
            <PetitionList
              option="MODAL"
              id={0}
              status="PETITION"
              title={petitionData.title}
              numberOfApprover={0}
              percentageOfApprover={0}
              createdAt={`${date.year}-${date.month}-${date.day}`}
            />
          </S.PreviewBox>
          <S.ButtonBox>
            <MiniButton option="UNFILLED" value="닫기" onClick={close} />
            <MiniButton
              option="FILLED"
              value="청원 게시"
              onClick={() => writePetitionMutate.mutate()}
            />
          </S.ButtonBox>
        </S.CheckWriteModalWrap>
      </S.CheckWriteModal>
    </S.BlurBackground>
  );
};

export default CheckWriteModal;
