import { SchoolType } from 'type/school/search.type';
import * as S from './style';

const SchoolList = ({ name, id, emailDomain }: SchoolType) => {
  return (
    <S.List>
      <S.ListWrap>
        <S.SchoolName>{name}</S.SchoolName>
        <S.Email>@{emailDomain}</S.Email>
      </S.ListWrap>
      <S.Button>
        <S.RadioInput
          type="radio"
          id={`radio-btn${id}`}
          name="school-radio"
          value={id}
        />
        <S.RadioLabel htmlFor={`radio-btn${id}`} />
      </S.Button>
    </S.List>
  );
};

export default SchoolList;
