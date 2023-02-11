import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getBoard } from 'api/board';
import { StatusType, GetBoardType } from 'type/board/board.type';
import { useRecoilValue } from 'recoil';
import { userData } from 'atom/user';
import AddSvg from 'assets/add.svg';
import { useNavigate } from 'react-router-dom';
import PetitionList from './PetitionList';
import RadioTabMenu from './RadioTabMenu';
import * as S from './style';

const Main = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<StatusType>('PETITION');
  const user = useRecoilValue(userData);
  const [isBannerOpen, setIsBannerOpen] = useState(true);

  const { isLoading, isError, data } = useQuery<GetBoardType[]>(
    ['status', status],
    () => getBoard(status),
    {
      enabled: !!user?.authority,
    },
  );

  return (
    <S.Container>
      {isBannerOpen ? (
        <S.Banner>
          <S.BannerText>
            학생청원,
            <br />
            학생들의 목소리를 듣다
          </S.BannerText>
          <S.CloseBanner onClick={() => setIsBannerOpen(false)}>
            X 닫기
          </S.CloseBanner>
        </S.Banner>
      ) : (
        <S.Margin />
      )}
      <S.ContentsWrap>
        <S.SubNav>
          <RadioTabMenu setStatus={setStatus} status={status} />
          <S.CreatePetition>
            <S.Img src={AddSvg} />
            <S.CreatePetitionText onClick={() => navigate('/createPetition')}>
              청원 추가
            </S.CreatePetitionText>
          </S.CreatePetition>
        </S.SubNav>
        <S.PetitionWrap>
          {user?.authority ? (
            data?.map((item) => {
              return (
                <PetitionList
                  key={item.id}
                  createdAt={item.createdAt}
                  title={item.title}
                  numberOfAgreers={item.numberOfAgreers}
                  status={status}
                />
              );
            })
          ) : (
            <div>로그인을 해야지 청원을 하지 ;;</div>
          )}
        </S.PetitionWrap>
      </S.ContentsWrap>
    </S.Container>
  );
};

export default Main;
