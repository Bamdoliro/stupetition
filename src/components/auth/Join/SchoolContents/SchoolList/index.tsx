import { SchoolListType } from 'types/school/search.type';
import * as S from './style';

const SchoolList = ({ name, id, emailDomain, onChange }: SchoolListType) => {
  return (
    <S.List>
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
    </S.List>
  );
};

export default SchoolList;
