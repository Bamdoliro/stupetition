import { customAxios } from 'lib/axios/customAxios';
import { useState } from 'react';
import { SchoolSearchType } from 'type/school/search.type';
import * as S from './style';

const SchoolSearch = () => {
  const [searchWord, setSearchWord] = useState<string>();
  const [searchResult, setSearchResult] = useState<SchoolSearchType[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const getSchool = async () => {
    const response = await customAxios.get('/school/search', {
      params: {
        q: searchWord,
      },
    });
    if (response.status === 200 && searchWord !== '') {
      setSearchResult(response.data);
      return;
    }
    setSearchResult([]);
  };

  return (
    <>
      <S.SchoolSearch>
        <S.Input onChange={onChange} placeholder="검색어를 입력하던가 말던가" />
        <S.Button onClick={getSchool}>검색</S.Button>
      </S.SchoolSearch>
      <S.SearchResult>
        {searchResult.map((item) => {
          return <S.List key={item.id}>{item.name}</S.List>;
        })}
      </S.SearchResult>
    </>
  );
};

export default SchoolSearch;
