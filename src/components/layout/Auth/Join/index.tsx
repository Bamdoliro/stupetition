import React, { useState } from 'react';
import { JoinType } from 'types/auth/auth.type';
import JoinContent from './JoinContent';
import SchoolContent from './SchoolContent';
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
    <S.JoinLayout>
      <S.Wrap>
        <S.JoinBox>
          {searchSchoolIsOpen ? (
            <JoinContent
              setSearchSchoolOpen={setSearchSchoolOpen}
              setJoinData={setJoinData}
              joinData={joinData}
            />
          ) : (
            <SchoolContent
              setSearchSchoolOpen={setSearchSchoolOpen}
              setJoinData={setJoinData}
              joinData={joinData}
            />
          )}
        </S.JoinBox>
      </S.Wrap>
    </S.JoinLayout>
  );
};

export default Join;
