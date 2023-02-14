import SearchInput from 'components/common/SearchInput';
import Button from 'components/common/Button';
import { SchoolType } from 'type/school/search.type';
import { useQuery } from 'react-query';
import { searchSchool } from 'api/school';
import { useState } from 'react';
import { JoinContentsPropsType } from 'type/auth/auth.type';
import SchoolList from './SchoolList';
import * as S from './style';

const SchoolContents = ({
  setSearchSchoolOpen,
  setJoinData,
  joinData,
}: JoinContentsPropsType) => {
  const [searchWord, setSearchWord] = useState('');

  const handleClickRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.id;
    const id = Number(e.target.value);
    setJoinData({ ...joinData, schoolName: name, schoolId: id });
  };

  const onChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const { data } = useQuery<SchoolType[]>(
    ['searchWord', searchWord],
    () => searchSchool(searchWord),
    {
      enabled: !!searchWord,
      select: (data) => data.slice(0, 10),
    },
  );

  return (
    <S.Container>
      <S.Wrap>
        <S.Title>학교 검색</S.Title>
        <SearchInput
          width="100%"
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
            padding="12px 22px"
            onClick={() => {
              setSearchSchoolOpen(true);
              setJoinData({
                email: '',
                password: '',
                rePassword: '',
                schoolId: 0,
                schoolName: '',
              });
            }}
          />
          <Button
            value="완료"
            onClick={() => setSearchSchoolOpen(true)}
            option="FILLED"
            width="50%"
            padding="12px 22px"
          />
        </S.ButtonWrap>
      </S.Wrap>
    </S.Container>
  );
};

export default SchoolContents;
