import MiniButton from 'components/common/MiniButton';
import PetitionList from 'components/common/PetitionList';
import { useModal } from 'hooks/useDialog';
import { MouseEventHandler } from 'react';
import * as S from './style';

interface CheckPetitionModalPropsType {
  title: string;
  close: MouseEventHandler<HTMLButtonElement>;
  write: MouseEventHandler<HTMLButtonElement>;
}

const CheckPetitionModal = ({
  title,
  close,
  write,
}: CheckPetitionModalPropsType) => {
  const { modal } = useModal();

  return (
    <S.BlurBackground display={modal ? 'flex' : 'none'}>
      <S.CheckPetitionModal>
        <S.CheckPetitionModalWrap>
          <S.Title>최종 확인</S.Title>
          <S.PreviewBox>
            <S.Preview>썸네일 미리보기</S.Preview>
            <PetitionList
              option="MODAL"
              id={0}
              status="ANSWERED"
              title={title}
              numberOfApprover={0}
              createdAt="0000-00-00"
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
