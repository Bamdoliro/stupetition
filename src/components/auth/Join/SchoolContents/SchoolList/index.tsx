import { SchoolType } from 'type/school/search.type';
import * as S from './style';

const SchoolList = ({ name, id, emailDomain }: SchoolType) => {
  return (
    <S.List>
      <S.ListWrap>
        <S.SchoolName>{name}</S.SchoolName>
        <S.Email>@{emailDomain}</S.Email>
      </S.ListWrap>
      <S.Button>선택</S.Button>
    </S.List>
  );
};

export default SchoolList;
