import React, { useState } from 'react';
import JoinContents from './JoinContents';
import SchoolContents from './SchoolContents';
import * as S from './style';

const Join = () => {
  return (
    <S.Container>
      <S.Join>
        <S.Wrap>
          <S.Title>학교 검색</S.Title>
          <SchoolContents />
        </S.Wrap>
      </S.Join>
    </S.Container>
  );
};

export default Join;
