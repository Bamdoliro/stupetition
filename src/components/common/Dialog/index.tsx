import MiniButton from '../MiniButton';
import * as S from './style';

const Dialog = () => {
  return (
    <S.BlurBackground>
      <S.Confirm>
        <S.ConfirmWrap>
          <S.ConfirmTextBox>
            <S.ConfirmTitle>경고 창</S.ConfirmTitle>
            <S.ConfirmContent>
              이대로 나가면 변경사항이 모두 삭제됩니다. 정말 이 페이지를
              나가시겠습니까?
            </S.ConfirmContent>
          </S.ConfirmTextBox>
          <S.ConfirmButtonBox>
            <MiniButton option="UNFILLED" value="취소" />
            <MiniButton option="FILLED" value="나가기" />
          </S.ConfirmButtonBox>
        </S.ConfirmWrap>
      </S.Confirm>
    </S.BlurBackground>
  );
};

export default Dialog;
