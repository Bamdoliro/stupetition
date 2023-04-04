import Logo from 'assets/logo.svg';
import * as S from './style';

interface PropsType {
  posistion: 'flex-end' | 'flex-start';
}

const Ment = ({ posistion }: PropsType) => {
  return (
    <S.Ment style={{ alignSelf: posistion }}>
      <S.LogoWrap>
        <S.Logo src={Logo} />
        <S.LogoText>학생청원</S.LogoText>
      </S.LogoWrap>
      <S.Text>
        학교에게 하고싶었던 말,
        <br />
        이제는 모두 학생청원으로
      </S.Text>
    </S.Ment>
  );
};

export default Ment;
