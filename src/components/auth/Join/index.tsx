import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import JoinContents from './JoinContents';
import SchoolContents from './SchoolContents';
import * as S from './style';

const Join = () => {
  return (
    <S.Container>
      <S.Join>
        <S.Wrap>
          <Routes>
            <Route path="/" element={<JoinContents />} />
            <Route path="/school" element={<SchoolContents />} />
          </Routes>
        </S.Wrap>
      </S.Join>
    </S.Container>
  );
};

export default Join;
