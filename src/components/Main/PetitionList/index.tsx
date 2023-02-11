import 'react-circular-progressbar/dist/styles.css';
import { PetitionListPropsType } from 'type/main/main.type';
import { ProgressChecker } from 'utills/ProgressChecker';
import Progressbar from '../../common/Progressbar';
import * as S from './style';

const PetitionList = ({
  createdAt,
  title,
  numberOfAgreers,
  status,
}: PetitionListPropsType) => {
  const date = createdAt.split('T');
  const { color, progress } = ProgressChecker(status);
  return (
    <S.Container>
      <S.Wrap>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.DetailInfo>
            <S.Progress color={color}>{progress}</S.Progress>
            <S.Date>{date[0]}</S.Date>
          </S.DetailInfo>
        </S.Info>
        <Progressbar
          option="LIST"
          width="96px"
          height="96px"
          numberOfAgreers={numberOfAgreers}
        />
      </S.Wrap>
    </S.Container>
  );
};

export default PetitionList;
