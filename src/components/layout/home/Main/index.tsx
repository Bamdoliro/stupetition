import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getPetition } from 'apis/petition.api';
import { StatusType, GetPetitionType } from 'types/petition/petition.type';
import { useRecoilValue } from 'recoil';
import { userData } from 'atoms/user.atom';
import { useNavigate } from 'react-router-dom';
import MiniButton from 'components/shared/MiniButton';
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
      enabled: !!user.authority,
    },
  );

  return (
    <S.MainLayout>
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
            {user.authority ? (
              <MiniButton
                onClick={() => navigate('/petition/write')}
                option="FILLED"
                padding="10px 16px"
                value="청원 추가"
              />
            ) : (
              ''
            )}
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
    </S.MainLayout>
  );
};

export default Main;
