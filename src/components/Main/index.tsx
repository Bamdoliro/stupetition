import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getPetition } from 'api/petition';
import { StatusType, GetPetitionType } from 'types/petition/petition.type';
import { useRecoilValue } from 'recoil';
import { userData } from 'atoms/user';
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

  const { isLoading, isError, data } = useQuery<GetPetitionType[]>(
    ['status', status],
    () => getPetition(status),
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
        ''
      )}
      <S.ContentsWrap>
        <S.ContentsInnerWrap>
          <S.SubNav>
            <RadioTabMenu setStatus={setStatus} status={status} />
            <S.CreatePetition onClick={() => navigate('/petition/create')}>
              <S.CreatePetitionText>청원 추가</S.CreatePetitionText>
            </S.CreatePetition>
          </S.SubNav>
          <S.PetitionWrap>
            {user?.authority ? (
              data?.map((item) => {
                return (
                  <PetitionList
                    key={item.id}
                    id={item.id}
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
        </S.ContentsInnerWrap>
      </S.ContentsWrap>
    </S.Container>
  );
};

export default Main;
