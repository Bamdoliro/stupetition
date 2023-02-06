import SearchInput from 'components/common/SearchInput';
import { SchoolSearchType } from 'type/school/search.type';
import { useQuery } from 'react-query';
import { searchSchool } from 'api/school';
import { useState } from 'react';
import SchoolList from './SchoolList';
import * as S from './style';

const SchoolContents = () => {
  const [schoolData, setSchoolData] = useState({
    school: '',
    schoolId: 0,
  });

  const onChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSchoolData({ ...schoolData, [name]: value });
  };

  const { data } = useQuery<SchoolSearchType[]>(
    ['searchWord', schoolData.school],
    () => searchSchool(schoolData.school),
    {
      enabled: !!schoolData.school,
      select: (data) => data.slice(0, 5), // 5개만 잘라서 가지고 옴
    },
  );

  return (
    <S.Container>
      <SearchInput
        desc="학교"
        placeholder="학교 검색"
        type="text"
        name="school"
        onChange={onChage}
      />
      <S.SchoolWrap>
        <SchoolList />
      </S.SchoolWrap>
    </S.Container>
  );
};

export default SchoolContents;
