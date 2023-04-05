import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';
import { FormatDatetime } from 'utils/FormatDatetime';
import { ProgressChecker } from 'utils/ProgressChecker';
import Progressbar from 'components/common/Progressbar';
import { StatusType } from 'types/petition.type';
import * as S from './style';

type PetitonListOption = 'MODAL' | 'LIST';

interface PropsType {
  option: PetitonListOption;
  createdAt: string;
  title: string;
  numberOfApprover: number;
  percentageOfApprover: number;
  id: number;
  status: StatusType;
}

const PetitionList = ({
  option,
  createdAt,
  title,
  percentageOfApprover,
  numberOfApprover,
  id,
  status,
}: PropsType) => {
  const navigate = useNavigate();
  const { date } = FormatDatetime(createdAt);
  const { color, progress } = ProgressChecker(status);
  return (
    <S.PetitionList
      onClick={() => option === 'LIST' && navigate(`/petition/${id}`)}
    >
      <S.PetitionListWrap>
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
          percentageOfApprover={percentageOfApprover}
          numberOfApprover={numberOfApprover}
        />
      </S.PetitionListWrap>
    </S.PetitionList>
  );
};

export default PetitionList;
