import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import { color } from 'styles/theme.style';
import { ProgressBarOption } from 'types/progressBar.type';
import * as S from './style';

interface ProgressbarPropsType {
  numberOfApprover: number;
  width: string;
  height: string;
  option: ProgressBarOption;
}

const Progressbar = ({
  numberOfApprover,
  width,
  height,
  option,
}: ProgressbarPropsType) => {
  const percentage = (numberOfApprover / 20) * 100;

  return (
    <S.ProgressBar style={{ width, height }}>
      <CircularProgressbarWithChildren
        value={numberOfApprover}
        maxValue={20}
        styles={buildStyles({
          strokeLinecap: 'butt',
          pathColor: color.main,
        })}
      >
        {option === 'LIST' ? (
          <>
            <S.PercentSmall>{percentage}%</S.PercentSmall>
            <S.PersonnelSmall>{numberOfApprover}명</S.PersonnelSmall>
          </>
        ) : (
          <>
            <S.PercentLarge>{percentage}%</S.PercentLarge>
            <S.PersonnelLarge>{numberOfApprover}명</S.PersonnelLarge>
          </>
        )}
      </CircularProgressbarWithChildren>
    </S.ProgressBar>
  );
};

export default Progressbar;
