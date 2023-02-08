import 'react-circular-progressbar/dist/styles.css';
import { PetitionListPropsType } from 'type/main/main.type';
import Progressbar from './Progressbar';
import * as S from './style';

const PetitionList = ({ createdAt, title }: PetitionListPropsType) => {
  const date = createdAt.split('T');
  return (
    <S.Container>
      <S.Wrap>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.DetailInfo>
            <S.Progress color="#66BB6A">진행</S.Progress>
            <S.Date>{date[0]}</S.Date>
          </S.DetailInfo>
        </S.Info>
        <Progressbar numberOfAgreers={10} />
      </S.Wrap>
    </S.Container>
  );
};

export default PetitionList;
