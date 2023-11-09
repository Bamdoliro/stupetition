import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import { color } from 'styles/theme.style';
import { ProgressBarOption } from 'types/progressBar.type';
import * as S from './style';

interface PropsType {
  numberOfApprover: number;
  percentageOfApprover: number;
  width: string;
  height: string;
  option: ProgressBarOption;
}

const Progressbar = ({
  percentageOfApprover,
  numberOfApprover,
  width,
  height,
  option,
}: PropsType) => {
  return (
    <S.ProgressBar style={{ width, height }}>
      <CircularProgressbarWithChildren
        value={percentageOfApprover}
        maxValue={100}
        styles={buildStyles({
          strokeLinecap: 'round',
          pathColor: color.main,
        })}
      >
        {option === 'LIST' ? (
          <>
            <S.PercentSmall>{percentageOfApprover}%</S.PercentSmall>
            <S.PersonnelSmall>{numberOfApprover}명</S.PersonnelSmall>
          </>
        ) : (
          <>
            <S.PercentLarge>{percentageOfApprover}%</S.PercentLarge>
            <S.PersonnelLarge>{numberOfApprover}명</S.PersonnelLarge>
          </>
        )}
      </CircularProgressbarWithChildren>
    </S.ProgressBar>
  );
};

export default Progressbar;
