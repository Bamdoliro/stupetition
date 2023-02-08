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
        <S.PetitionWrap>
          <PetitionList
            createdAt="2023-02-08T15:17:05.763Z"
            title="제발 소개과 보내주세요 안그러면 저 자퇴합니다"
          />
          <PetitionList
            createdAt="2023-02-08T15:17:05.763Z"
            title="제발 소개과 보내주세요 안그러면 저 자퇴합니다"
          />
        </S.PetitionWrap>
      </S.ContentsWrap>
    </S.Container>
  );
};

export default Main;
