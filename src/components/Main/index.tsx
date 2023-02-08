import React, { useState } from 'react';
import { StatusType } from 'type/board/board.type';
import PetitionList from './PetitionList';
import RadioTabMenu from './RadioTabMenu';
import * as S from './style';

const Main = () => {
  const [status, setStatus] = useState<StatusType>('PETITION');

  return (
    <S.Container>
      <S.Banner>
        <S.BannerText>
          학생청원,
          <br />
          학생들의 목소리를 듣다
        </S.BannerText>
      </S.Banner>
      <S.ContentsWrap>
        <RadioTabMenu setStatus={setStatus} status={status} />
        <PetitionList />
      </S.ContentsWrap>
    </S.Container>
  );
};

export default Main;
