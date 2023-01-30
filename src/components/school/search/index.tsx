import { useState } from 'react';
import { SchoolSearchType } from 'type/school/search.type';
import { useQuery } from 'react-query';
import { searchSchool } from 'api/school';
import * as S from './style';

const SchoolSearch = () => {
  const [searchWord, setSearchWord] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const { data } = useQuery<SchoolSearchType[]>(
    ['searchWord', searchWord],
    () => searchSchool(searchWord),
    {
      enabled: !!searchWord,
      select: (data) => data.slice(0, 5), // 5개만 잘라서 가지고 옴
    },
  );

  return (
    <>
      <S.SchoolSearch>
        <S.Input onChange={onChange} placeholder="검색어를 입력하던가 말던가" />
      </S.SchoolSearch>
      <S.SearchResult>
        {data &&
          data?.map((item) => {
            return <S.List key={item.id}>{item.name}</S.List>;
          })}
      </S.SearchResult>
    </>
  );
};

export default SchoolSearch;
