import React, { useState } from 'react';
import JoinContents from './JoinContents';
import * as S from './style';

const Join = () => {
  return (
    <S.Container>
      <S.Join>
        <S.Wrap>
          <S.Title>회원가입</S.Title>
          <JoinContents />
        </S.Wrap>
      </S.Join>
    </S.Container>
  );
};

export default Join;
