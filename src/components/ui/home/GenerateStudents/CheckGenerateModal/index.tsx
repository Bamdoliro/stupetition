import MiniButton from 'components/common/MiniButton';
import * as S from './style';

const CheckGenerateModal = () => {
  return (
    <S.BlurBackground display={true ? 'flex' : 'none'}>
      <S.CheckGenerateModal>
        <S.CheckGenerateModalWrap>
          <S.TextBox>
            <S.Title>아이디 생성 완료!</S.Title>
            <S.Content>2학년 학생 61명의 아이디를 생성했습니다</S.Content>
          </S.TextBox>
          <S.ButtonBox>
            <MiniButton
              option="FILLED"
              value="확인"
              onClick={() => console.log('확인')}
            />
            <MiniButton
              option="UNFILLED"
              value="인쇄용 pdf 다운로드"
              onClick={() => console.log('다운로드')}
            />
          </S.ButtonBox>
        </S.CheckGenerateModalWrap>
      </S.CheckGenerateModal>
    </S.BlurBackground>
  );
};

export default CheckGenerateModal;
