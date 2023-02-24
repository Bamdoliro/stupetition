import MiniButton from 'components/common/MiniButton';
import PetitionList from 'components/common/PetitionList';
import * as S from './style';

const CheckPetitionModal = () => {
  return (
    <S.BlurBackground display={true ? 'flex' : 'none'}>
      <S.CheckPetitionModal>
        <S.CheckPetitionModalWrap>
          <S.Title>최종 확인</S.Title>
          <S.PreviewBox>
            <S.Preview>썸네일 미리보기</S.Preview>
            <PetitionList
              id={0}
              status="ANSWERED"
              title=""
              numberOfAgreers={0}
              createdAt="0000-00-00 00:00:00"
            />
          </S.PreviewBox>
          <S.ButtonBox>
            <MiniButton option="UNFILLED" value="닫기" />
            <MiniButton option="FILLED" value="청원 게시" />
          </S.ButtonBox>
        </S.CheckPetitionModalWrap>
      </S.CheckPetitionModal>
    </S.BlurBackground>
  );
};

export default CheckPetitionModal;
