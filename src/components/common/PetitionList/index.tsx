import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';
import { FormatDatetime } from 'utils/FormatDatetime';
import { ProgressChecker } from 'utils/ProgressChecker';
import Progressbar from 'components/common/Progressbar';
import { StatusType } from 'types/petition.type';
import * as S from './style';

interface PetitionListPropsType {
  createdAt: string;
  title: string;
  numberOfApprover: number;
  id: number;
  status: StatusType;
}

const PetitionList = ({
  createdAt,
  title,
  numberOfApprover,
  id,
  status,
}: PetitionListPropsType) => {
  const navigate = useNavigate();
  const { date } = FormatDatetime(createdAt);
  const { color, progress } = ProgressChecker(status);
  return (
    <S.PetitionList onClick={() => navigate(`/petition/${id}`)}>
      <S.Wrap>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.DetailInfo>
            <S.Progress color={color}>{progress}</S.Progress>
            <S.Date>{date}</S.Date>
          </S.DetailInfo>
        </S.Info>
        <Progressbar
          option="LIST"
          width="96px"
          height="96px"
          numberOfApprover={numberOfApprover}
        />
      </S.Wrap>
    </S.PetitionList>
  );
};

export default PetitionList;