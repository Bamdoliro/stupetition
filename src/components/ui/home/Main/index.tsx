import { useState } from 'react';
import { StatusType } from 'types/petition.type';
import { useRecoilValue } from 'recoil';
import { userState } from 'atoms/user.atom';
import { useNavigate } from 'react-router-dom';
import MiniButton from 'components/common/MiniButton';
import { PetitionListFeature } from 'features/home/petitionList.feature';
import Loading from 'pages/Loading';
import NotFound from 'pages/404';
import PetitionList from '../../../common/PetitionList';
import RadioTabMenu from '../../../common/RadioTabMenu';
import * as S from './style';

const Main = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userState);
  const [status, setStatus] = useState<StatusType>('PETITION');
  const [isBannerOpen, setIsBannerOpen] = useState(true);
  const { isLoading, isError, data } = PetitionListFeature(status);

  return (
    <S.MainLayout>
      <S.MainWrap>
        {isBannerOpen && (
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
        )}
        <S.ContentsWrap>
          <S.ContentsInnerWrap>
            <S.SubNav>
              <RadioTabMenu
                option="MAIN"
                setStatus={setStatus}
                status={status}
              />
              {user.authority && (
                <MiniButton
                  onClick={() => navigate('/petition/write')}
                  option="FILLED"
                  value="청원 추가"
                />
              )}
            </S.SubNav>
            {isError && <NotFound />}
            {isLoading && <Loading />}
            {user.authority && (
              <S.PetitionWrap>
                {data.map((item) => (
                  <PetitionList
                    option="LIST"
                    key={item.id}
                    id={item.id}
                    createdAt={item.createdAt}
                    title={item.title}
                    numberOfApprover={item.numberOfApprover}
                    status={status}
                  />
                ))}
              </S.PetitionWrap>
            )}
          </S.ContentsInnerWrap>
        </S.ContentsWrap>
      </S.MainWrap>
    </S.MainLayout>
  );
};

export default Main;
