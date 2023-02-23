import React, { useState } from 'react';
import { JoinType } from 'types/auth/auth.type';
import JoinContents from './JoinContents';
import SchoolContents from './SchoolContents';
import * as S from './style';

const Join = () => {
  const [joinData, setJoinData] = useState<JoinType>({
    email: '',
    password: '',
    rePassword: '',
    schoolId: 0,
    schoolName: '',
  });

  /**
   * true 일때는 회원가입 화면
   * false 일때는 학교 찾기 화면
   */
  const [searchSchoolIsOpen, setSearchSchoolOpen] = useState<boolean>(true);

  return (
    <S.Container>
      <S.Join>
        <S.Wrap>
          {searchSchoolIsOpen ? (
            <JoinContents
              setSearchSchoolOpen={setSearchSchoolOpen}
              setJoinData={setJoinData}
              joinData={joinData}
            />
          ) : (
            <SchoolContents
              setSearchSchoolOpen={setSearchSchoolOpen}
              setJoinData={setJoinData}
              joinData={joinData}
            />
          )}
        </S.Wrap>
      </S.Join>
    </S.Container>
  );
};

export default Join;
