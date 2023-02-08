import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
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
        <CircularProgressbarWithChildren value={66}>
          <img
            style={{ width: 40, marginTop: -5 }}
            src="https://i.imgur.com/b9NyUGm.png"
            alt="doge"
          />
          <div style={{ fontSize: 12, marginTop: -5 }}>
            <strong>66%</strong> mate
          </div>
        </CircularProgressbarWithChildren>
      </S.Wrap>
    </S.Container>
  );
};

export default PetitionList;
