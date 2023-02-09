import React, { useState } from 'react';
import { JoinType } from 'type/auth/auth.type';
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
  const [isSchool, setIsSchool] = useState<boolean>(true);

  return (
    <S.Container>
      <S.Join>
        <S.Wrap>
          {isSchool ? (
            <JoinContents
              setIsSchool={setIsSchool}
              setJoinData={setJoinData}
              joinData={joinData}
            />
          ) : (
            <SchoolContents
              setIsSchool={setIsSchool}
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
