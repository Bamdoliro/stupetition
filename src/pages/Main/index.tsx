import { useState } from 'react';
import { StatusType } from 'types/petition.type';
import { useNavigate } from 'react-router-dom';
import MiniButton from 'components/common/MiniButton';
import { usePetitionList } from 'features/PetitionListFeature';
import Loading from 'components/common/Loading';
import NotFound from 'pages/NotFound';
import { useUser } from 'hooks/useUser';
import PetitionList from 'components/PetitionList';
import RadioTabMenu from 'components/RadioTabMenu';
import Banner from './Banner';
import * as S from './style';

const Main = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [status, setStatus] = useState<StatusType>('PETITION');
  const [isBannerOpen, setIsBannerOpen] = useState(true);
  const { isLoading, isError, data } = usePetitionList(status);

  if (isLoading) return <Loading />;
  if (isError) return <NotFound />;
  return (
    <S.MainLayout>
      {isBannerOpen && <Banner setIsBannerOpen={setIsBannerOpen} />}
      <S.ContentsBox>
        <S.ContentsWrap>
          <S.SubNav>
            <RadioTabMenu option="MAIN" setStatus={setStatus} status={status} />
            {user.authority === 'ROLE_STUDENT' && (
              <MiniButton
                onClick={() => navigate('/petition/write')}
                option="FILLED"
                value="청원하기"
              />
            )}
          </S.SubNav>
          {user.authority && (
            <S.PetitionListBox>
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
            </S.PetitionListBox>
          )}
        </S.ContentsWrap>
      </S.ContentsBox>
    </S.MainLayout>
  );
};

export default Main;
