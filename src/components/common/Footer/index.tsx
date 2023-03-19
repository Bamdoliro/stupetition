import Logo from 'assets/logo.svg';
import * as S from './style';

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterWrap>
        <S.LogoWrap>
          <S.Logo src={Logo} />
          <S.LogoText>학생청원</S.LogoText>
        </S.LogoWrap>
      </S.FooterWrap>
    </S.Footer>
  );
};

export default Footer;
