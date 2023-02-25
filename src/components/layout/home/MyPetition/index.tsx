import { userState } from 'atoms/user.atom';
import PetitionList from 'components/common/PetitionList';
import { useRecoilValue } from 'recoil';
import * as S from './style';

const MyPetition = () => {
  const user = useRecoilValue(userState);

  return (
    <S.MyPetitionLayout>
      <S.Wrap>
        <S.InnerWrap>
          <S.PetitionWrap>
            {/* {user.authority ? (
              data.map((item) => {
                return (
                  <PetitionList
                    option="LIST"
                    key={item.id}
                    id={item.id}
                    createdAt={item.createdAt}
                    title={item.title}
                    numberOfApprover={item.numberOfApprover}
                    status={status}
                  />
                );
              })
            ) : (
              <div>로그인을 해야지 청원을 하지 ;;</div>
            )} */}
          </S.PetitionWrap>
        </S.InnerWrap>
      </S.Wrap>
    </S.MyPetitionLayout>
  );
};

export default MyPetition;
