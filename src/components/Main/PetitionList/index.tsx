import 'react-circular-progressbar/dist/styles.css';
import Progressbar from './Progressbar';
import * as S from './style';

const PetitionList = () => {
  return (
    <S.Container>
      <S.Wrap>
        <S.Info>
          <S.Title>제발 소개과 보내주세요 안그러면 저 자퇴합니다</S.Title>
          <S.DetailInfo>
            <S.Progress color="#66BB6A">진행</S.Progress>
            <S.Date>2023-02-07</S.Date>
          </S.DetailInfo>
        </S.Info>
        <Progressbar numberOfAgreers={10} />
      </S.Wrap>
    </S.Container>
  );
};

export default PetitionList;
