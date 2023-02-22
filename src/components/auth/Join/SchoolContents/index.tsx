import SearchInput from 'components/Common/SearchInput';
import Button from 'components/Common/Button';
import { SchoolType } from 'types/school/search.type';
import { useQuery } from 'react-query';
import { searchSchool } from 'api/school';
import { useState } from 'react';
import { JoinContentsPropsType } from 'types/auth/auth.type';
import * as T from 'styles/text';
import { color } from 'styles/theme';
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
            option="UNFILLED"
            width="50%"
            padding="12px 22px"
            element={<T.H5 color={color.gray500}>취소</T.H5>}
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
            onClick={() => setSearchSchoolOpen(true)}
            option="FILLED"
            width="50%"
            padding="12px 22px"
            element={<T.H5 color={color.white}>완료</T.H5>}
          />
        </S.ButtonWrap>
      </S.Wrap>
    </S.Container>
  );
};

export default SchoolContents;
