import { useState } from 'react';
import { StatusType } from 'types/petition.type';
import { useNavigate } from 'react-router-dom';
import MiniButton from 'components/common/MiniButton';
import { usePetitionList } from 'features/PetitionListFeature';
import Loading from 'pages/Loading';
import NotFound from 'pages/404';
import { useUser } from 'hooks/useUser';
import PetitionList from 'components/common/PetitionList';
import RadioTabMenu from 'components/common/RadioTabMenu';
import * as S from './style';

const Main = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [status, setStatus] = useState<StatusType>('PETITION');
  const [isBannerOpen, setIsBannerOpen] = useState(true);
  const { isLoading, isError, data } = usePetitionList(status);

  return (
    <S.MainLayout>
      {isBannerOpen && (
        <S.Banner>
          <S.BannerWrap>
            <S.BannerText>
              학생청원,
              <br />
              학생들의 목소리를 듣다
            </S.BannerText>
            <S.CloseBanner onClick={() => setIsBannerOpen(false)}>
              X 닫기
            </S.CloseBanner>
          </S.BannerWrap>
        </S.Banner>
      )}
      <S.ContentsWrap>
        <S.ContentsInnerWrap>
          <S.SubNav>
            <RadioTabMenu option="MAIN" setStatus={setStatus} status={status} />
            {user.authority && (
              <MiniButton
                onClick={() => navigate('/petition/write')}
                option="FILLED"
                value="청원하기"
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
                  percentageOfApprover={item.percentageOfApprover}
                  status={status}
                />
              ))}
            </S.PetitionWrap>
          )}
        </S.ContentsInnerWrap>
      </S.ContentsWrap>
    </S.MainLayout>
  );
};

export default Main;
