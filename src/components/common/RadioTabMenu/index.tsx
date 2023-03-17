import { Dispatch, SetStateAction } from 'react';
import { StatusType } from 'types/petition.type';
import { MainTabDatas, MyPetitionTabDatas } from './data';
import * as S from './style';

type RadioOptionType = 'MAIN' | 'MY_PETITION';

interface RadioPropsType {
  status: string;
  setStatus: Dispatch<SetStateAction<StatusType>>;
  option: RadioOptionType;
}

const RadioTabMenu = ({ status, setStatus, option }: RadioPropsType) => {
  const data = option === 'MAIN' ? MainTabDatas : MyPetitionTabDatas;
  return (
    <S.RadioTabMenu>
      {data.map((item) => (
        <S.TabButton key={item.id}>
          <S.RadioInput
            type="radio"
            name="filtering-radio"
            id={item.option}
            value={item.option}
            onChange={() => setStatus(item.option)}
            checked={status === item.option}
          />
          <S.RadioLabel htmlFor={item.option}>{item.name}</S.RadioLabel>
        </S.TabButton>
      ))}
    </S.RadioTabMenu>
  );
};

export default RadioTabMenu;
