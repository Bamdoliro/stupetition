import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { color } from 'styles/theme';
import * as S from './style';

const PetitionList = () => {
  const percentage = 66;

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
        <S.ProgressBarWrap>
          <CircularProgressbarWithChildren
            value={percentage}
            styles={buildStyles({
              strokeLinecap: 'butt',
              pathColor: color.main,
            })}
          >
            <S.Percent>40%</S.Percent>
            <S.Personnel>50명</S.Personnel>
          </CircularProgressbarWithChildren>
        </S.ProgressBarWrap>
      </S.Wrap>
    </S.Container>
  );
};

export default PetitionList;
