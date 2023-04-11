import Logo from 'assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

interface PropsType {
  posistion: 'flex-end' | 'flex-start';
}

const Ment = ({ posistion }: PropsType) => {
  const navigate = useNavigate();

  return (
    <S.Ment style={{ alignSelf: posistion }}>
      <S.LogoBox onClick={() => navigate('/main')}>
        <S.Logo src={Logo} />
        <S.LogoText>학생청원</S.LogoText>
      </S.LogoBox>
      <S.Text>
        학교에게 하고싶었던 말,
        <br />
        이제는 모두 학생청원으로
      </S.Text>
    </S.Ment>
  );
};

export default Ment;
