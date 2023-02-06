import SearchInput from 'components/common/SearchInput';
import Button from 'components/common/Button';
import { SchoolType } from 'type/school/search.type';
import { useQuery } from 'react-query';
import { searchSchool } from 'api/school';
import { useState } from 'react';
import SchoolList from './SchoolList';
import * as S from './style';

const SchoolContents = () => {
  const [searchWord, setSearchWord] = useState('');
  const [schoolData, setSchoolData] = useState<SchoolType>({
    name: '',
    id: 0,
  });

  const handleClickRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.id;
    const id = Number(e.target.value);
    setSchoolData({
      name,
      id,
    });
  };

  const onChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const { data } = useQuery<SchoolType[]>(
    ['searchWord', searchWord],
    () => searchSchool(searchWord),
    {
      enabled: !!searchWord,
      select: (data) => data.slice(0, 5), // 5개만 잘라서 가지고 옴
    },
  );

  return (
    <>
      <S.Title>학교 검색</S.Title>
      <S.Container>
        <SearchInput
          placeholder="학교 검색"
          type="text"
          name="school"
          onChange={onChage}
        />
        <S.SchoolWrap>
          {data?.map((item) => {
            return (
              <SchoolList
                key={item.id}
                name={item.name}
                id={item.id}
                emailDomain={item.emailDomain}
                onChange={handleClickRadio}
              />
            );
          })}
        </S.SchoolWrap>
        <S.ButtonWrap>
          <Button
            value="취소"
            option="UNFILLED"
            width="50%"
            onClick={() => console.log('취소')}
          />
          <Button
            value="완료"
            onClick={() => console.log(schoolData)}
            option="FILLED"
            width="50%"
          />
        </S.ButtonWrap>
      </S.Container>
    </>
  );
};

export default SchoolContents;
