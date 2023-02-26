import { userState } from 'atoms/user.atom';
import PetitionList from 'components/common/PetitionList';
import RadioTabMenu from 'components/common/RadioTabMenu';
import { MyPetitionFeature } from 'features/home/myPetition.feature';
import NotFound from 'pages/404';
import Loading from 'pages/Loading';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { StatusType } from 'types/petition.type';
import * as S from './style';

const MyPetition = () => {
  const user = useRecoilValue(userState);
  const [status, setStatus] = useState<StatusType>('APPROVED');
  const { data, isLoading, isError } = MyPetitionFeature(status);

  if (isError) {
    return <NotFound />;
  }

  return (
    <S.MyPetitionLayout>
      <S.Wrap>
        <S.InnerWrap>
          <S.RadioTabMenuWrap>
            <RadioTabMenu
              option="MY_PETITION"
              status={status}
              setStatus={setStatus}
            />
          </S.RadioTabMenuWrap>
          {isLoading ? (
            <Loading />
          ) : user.authority ? (
            <S.PetitionWrap>
              {data?.map((item) => (
                <PetitionList
                  option="LIST"
                  key={item.id}
                  id={item.id}
                  createdAt={item.createdAt}
                  title={item.title}
                  numberOfApprover={item.numberOfApprover}
                  status={item.status}
                />
              ))}
            </S.PetitionWrap>
          ) : (
            <div>로그인을 해야지 청원을 하지 ;;</div>
          )}
        </S.InnerWrap>
      </S.Wrap>
    </S.MyPetitionLayout>
  );
};

export default MyPetition;
