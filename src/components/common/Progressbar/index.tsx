import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import { color } from 'styles/theme';
import { ProgressbarPropsType } from 'type/main/main.type';
import * as S from './style';

const Progressbar = ({ numberOfAgreers }: ProgressbarPropsType) => {
  const percentage = (numberOfAgreers / 20) * 100;

  return (
    <S.ProgressBarWrap>
      <CircularProgressbarWithChildren
        value={numberOfAgreers}
        maxValue={20}
        styles={buildStyles({
          strokeLinecap: 'butt',
          pathColor: color.main,
        })}
      >
        <S.Percent>{percentage}%</S.Percent>
        <S.Personnel>{numberOfAgreers}명</S.Personnel>
      </CircularProgressbarWithChildren>
    </S.ProgressBarWrap>
  );
};

export default Progressbar;
