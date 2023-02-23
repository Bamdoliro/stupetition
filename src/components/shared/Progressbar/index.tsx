import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import { color } from 'styles/theme.style';
import { ProgressBarOption } from 'types/common/progress.type';
import * as S from './style';

export interface ProgressbarPropsType {
  numberOfAgreers: number;
  width: string;
  height: string;
  option: ProgressBarOption;
}

const Progressbar = ({
  numberOfAgreers,
  width,
  height,
  option,
}: ProgressbarPropsType) => {
  const percentage = (numberOfAgreers / 20) * 100;

  return (
    <S.ProgressBar style={{ width, height }}>
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
    </S.ProgressBar>
  );
};

export default Progressbar;
