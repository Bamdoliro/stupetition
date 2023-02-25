import { Dispatch, SetStateAction } from 'react';
import { StatusType } from 'types/petition.type';
import * as S from './style';

interface RadioPropsType {
  status: string;
  setStatus: Dispatch<SetStateAction<StatusType>>;
}

const RadioTabMenu = ({ status, setStatus }: RadioPropsType) => {
  return (
    <S.RadioTabMenu>
      <S.TabButton>
        <S.RadioInput
          type="radio"
          name="filtering-radio"
          id="PETITION"
          value="PETITION"
          onChange={() => setStatus('PETITION')}
          checked={status === 'PETITION'}
        />
        <S.RadioLabel htmlFor="PETITION">진행중</S.RadioLabel>
      </S.TabButton>
      <S.TabButton>
        <S.RadioInput
          type="radio"
          name="filtering-radio"
          id="WAITING"
          value="WAITING"
          onChange={() => setStatus('WAITING')}
          checked={status === 'WAITING'}
        />
        <S.RadioLabel htmlFor="WAITING">대기중</S.RadioLabel>
      </S.TabButton>
      <S.TabButton>
        <S.RadioInput
          type="radio"
          name="filtering-radio"
          id="ANSWERED"
          value="ANSWERED"
          onChange={() => setStatus('ANSWERED')}
          checked={status === 'ANSWERED'}
        />
        <S.RadioLabel htmlFor="ANSWERED">완료</S.RadioLabel>
      </S.TabButton>
      <S.TabButton>
        <S.RadioInput
          type="radio"
          name="filtering-radio"
          id="EXPIRED"
          value="EXPIRED"
          onChange={() => setStatus('EXPIRED')}
          checked={status === 'EXPIRED'}
        />
        <S.RadioLabel htmlFor="EXPIRED">만료</S.RadioLabel>
      </S.TabButton>
    </S.RadioTabMenu>
  );
};

export default RadioTabMenu;
