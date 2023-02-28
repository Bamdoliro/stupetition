import SearchInput from 'components/common/SearchInput';
import Button from 'components/common/Button';
import { ChangeEvent, useState } from 'react';
import { JoinContentsPropsType } from 'types/auth.type';
import { SchoolFeature } from 'features/auth/school.feature';
import Loading from 'pages/Loading';
import SchoolList from './SchoolList';
import * as S from './style';

const SchoolContent = ({
  setSearchSchoolOpen,
  setJoinData,
  joinData,
}: JoinContentsPropsType) => {
  const [searchWord, setSearchWord] = useState<string>('');
  const { data, isLoading } = SchoolFeature(searchWord);

  const handleClickRadio = (e: ChangeEvent<HTMLInputElement>) => {
    /**
     * schoolName은 radio에서 id 값으로 사용됩니다
     * schoolId는 value값으로 최종선택을 하게되었을때 id를 추출합니다
     */
    const schoolName = e.target.id;
    const schoolId = Number(e.target.value);
    setJoinData({ ...joinData, schoolName, schoolId });
  };

  const cancel = () => {
    setSearchSchoolOpen(true);
    setJoinData({
      email: '',
      password: '',
      rePassword: '',
      schoolId: 0,
      schoolName: '',
    });
  };

  return (
    <S.SchoolContent>
      <S.Wrap>
        <S.Title>학교 검색</S.Title>
        <SearchInput
          width="100%"
          placeholder="학교 검색"
          type="text"
          name="school"
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <S.SchoolWrap>
          {isLoading && <Loading />}
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
            value="취소"
            onClick={cancel}
          />
          <Button
            onClick={() => setSearchSchoolOpen(true)}
            option="FILLED"
            width="50%"
            padding="12px 22px"
            value="완료"
          />
        </S.ButtonWrap>
      </S.Wrap>
    </S.SchoolContent>
  );
};

export default SchoolContent;
