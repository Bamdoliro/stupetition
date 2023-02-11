import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import { color } from 'styles/theme';
import { ProgressbarPropsType } from 'type/main/main.type';
import * as S from './style';

const Progressbar = ({
  numberOfAgreers,
  width,
  height,
  option,
}: ProgressbarPropsType) => {
  const percentage = (numberOfAgreers / 20) * 100;

  return (
    <S.ProgressBarWrap style={{ width, height }}>
      <CircularProgressbarWithChildren
        value={numberOfAgreers}
        maxValue={20}
        styles={buildStyles({
          strokeLinecap: 'butt',
          pathColor: color.main,
        })}
      >
        {option === 'LIST' ? (
          <>
            <S.PercentSmall>{percentage}%</S.PercentSmall>
            <S.PersonnelSmall>{numberOfAgreers}명</S.PersonnelSmall>
          </>
        ) : (
          <>
            <S.PercentLarge>{percentage}%</S.PercentLarge>
            <S.PersonnelLarge>{numberOfAgreers}명</S.PersonnelLarge>
          </>
        )}
      </CircularProgressbarWithChildren>
    </S.ProgressBarWrap>
  );
};

export default Progressbar;
