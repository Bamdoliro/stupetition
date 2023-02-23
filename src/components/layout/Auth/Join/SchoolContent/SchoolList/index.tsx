import { ChangeEventHandler } from 'react';
import * as S from './style';

export interface SchoolListType {
  name: string;
  id: number;
  emailDomain: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const SchoolList = ({ name, id, emailDomain, onChange }: SchoolListType) => {
  return (
    <S.SchoolList>
      <S.ListWrap>
        <S.SchoolName>{name}</S.SchoolName>
        <S.Email>@{emailDomain}</S.Email>
      </S.ListWrap>
      <S.Button>
        <S.RadioInput
          type="radio"
          id={name}
          name="school-radio"
          value={id}
          onChange={onChange}
        />
        <S.RadioLabel htmlFor={name} />
      </S.Button>
    </S.SchoolList>
  );
};

export default SchoolList;
