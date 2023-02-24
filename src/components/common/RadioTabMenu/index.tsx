import { Dispatch, SetStateAction } from 'react';
import { StatusType } from 'types/petition.type';
import { MainTabDatas } from './data';
import * as S from './style';

interface RadioPropsType {
  status: string;
  setStatus: Dispatch<SetStateAction<StatusType>>;
}

const RadioTabMenu = ({ status, setStatus }: RadioPropsType) => {
  return (
    <S.RadioTabMenu>
      {MainTabDatas.map((item) => (
        <S.TabButton key={item.id}>
          <S.RadioInput
            type="radio"
            name="filtering-radio"
            id={item.status}
            value={item.status}
            onChange={() => setStatus(item.status)}
            checked={status === item.status}
          />
          <S.RadioLabel htmlFor={item.status}>{item.name}</S.RadioLabel>
        </S.TabButton>
      ))}
    </S.RadioTabMenu>
  );
};

export default RadioTabMenu;
