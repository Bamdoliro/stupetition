import * as S from './style';

const ProfileHover = () => {
  return (
    <S.Container>
      <S.Button>
        <S.ButtonText>동의한 청원</S.ButtonText>
      </S.Button>
      <S.Button>
        <S.ButtonText>내가 쓴 청원</S.ButtonText>
      </S.Button>
      <S.Line />
      <S.Button>
        <S.ButtonText>로그아웃</S.ButtonText>
      </S.Button>
    </S.Container>
  );
};

export default ProfileHover;
