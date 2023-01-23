import customAxios from 'lib/axios/customAxios';
import { useEffect, useState } from 'react';
import * as S from './style';

const SchoolSearch = () => {
  interface SearchResultData {
    name: string;
    id: number;
    emailDomain: string;
  }

  const [searchWord, setSearchWord] = useState('');
  const [searchResult, setSearchResult] = useState<SearchResultData[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const getSchool = async () => {
    const response = await customAxios.get('/school/search', {
      params: {
        q: searchWord,
      },
    });
    if (response.status === 200) {
      setSearchResult(response.data);
      return;
    }
    alert(response);
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
