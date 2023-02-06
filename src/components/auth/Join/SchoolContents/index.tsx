import SearchInput from 'components/common/SearchInput';
import Button from 'components/common/Button';
import { SchoolType } from 'type/school/search.type';
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

  const { data } = useQuery<SchoolType[]>(
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
            />
          );
        })}
      </S.SchoolWrap>
      <S.ButtonWrap>
        <Button
          value="취소"
          onClick={() => console.log('눌림')}
          option="UNFILLED"
          width="50%"
        />
        <Button
          value="완료"
          onClick={() => console.log('눌림')}
          option="FILLED"
          width="50%"
        />
      </S.ButtonWrap>
    </S.Container>
  );
};

export default SchoolContents;
