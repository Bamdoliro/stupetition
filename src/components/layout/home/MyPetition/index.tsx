import { userState } from 'atoms/user.atom';
import PetitionList from 'components/common/PetitionList';
import RadioTabMenu from 'components/common/RadioTabMenu';
import {
  ApprovedPetitionFeature,
  WrotePetitionFeature,
} from 'features/home/myPetition.feature';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { StatusType } from 'types/petition.type';
import * as S from './style';

const MyPetition = () => {
  const ApprovedData = ApprovedPetitionFeature();
  const WroteData = WrotePetitionFeature();
  const user = useRecoilValue(userState);
  const [status, setStatus] = useState<StatusType>('APPROVED');
  const data = status === 'APPROVED' ? ApprovedData : WroteData;

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
          <S.PetitionWrap>
            {user.authority ? (
              data?.map((item) => {
                return (
                  <PetitionList
                    option="LIST"
                    key={item.id}
                    id={item.id}
                    createdAt={item.createdAt}
                    title={item.title}
                    numberOfApprover={item.numberOfApprover}
                    status={item.status}
                  />
                );
              })
            ) : (
              <div>로그인을 해야지 청원을 하지 ;;</div>
            )}
          </S.PetitionWrap>
        </S.InnerWrap>
      </S.Wrap>
    </S.MyPetitionLayout>
  );
};

export default MyPetition;
