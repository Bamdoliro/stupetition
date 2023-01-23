import customAxios from 'lib/axios/customAxios';
import { useEffect } from 'react';
import * as S from './style';

const getSchool = async () => {
  const response = await customAxios.get('/school/search');
  console.log(response); // 500 뜸
};

const SchoolSearch = () => {
  return (
    <S.SchoolSearch>
      <S.Button onClick={getSchool}>눌러</S.Button>
    </S.SchoolSearch>
  );
};

export default SchoolSearch;
