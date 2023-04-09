import PetitionList from 'components/common/PetitionList';
import RadioTabMenu from 'components/common/RadioTabMenu';
import { useMyPetitionList } from 'features/MyPetitionFeature';
import NotFound from 'pages/404';
import Loading from 'pages/Loading';
import { useState } from 'react';
import { StatusType } from 'types/petition.type';
import * as S from './style';

const MyPetition = () => {
  const [status, setStatus] = useState<StatusType>('WROTE');

  const { data, isError, isLoading } = useMyPetitionList(status);

  return (
    <S.MyPetitionLayout>
      <S.MyPetitionWrap>
        ;
        <S.InnerWrap>
          <S.RadioTabMenuWrap>
            <RadioTabMenu
              option="MY_PETITION"
              status={status}
              setStatus={setStatus}
            />
          </S.RadioTabMenuWrap>
          {isError && <NotFound />}
          {isLoading && <Loading />}
          <S.PetitionWrap>
            {data?.map((item) => (
              <PetitionList
                option="LIST"
                key={item.id}
                id={item.id}
                createdAt={item.createdAt}
                title={item.title}
                numberOfApprover={item.numberOfApprover}
                percentageOfApprover={item.percentageOfApprover}
                status={item.status}
              />
            ))}
          </S.PetitionWrap>
        </S.InnerWrap>
      </S.MyPetitionWrap>
    </S.MyPetitionLayout>
  );
};

export default MyPetition;
