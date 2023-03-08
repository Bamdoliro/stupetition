import { generateListState } from 'atoms/generateList.atom';
import MiniButton from 'components/common/MiniButton';
import { Dispatch, SetStateAction } from 'react';
import { useRecoilValue } from 'recoil';
import * as S from './style';
import UserInfoList from './UserInfoList';

interface PreviewPropsType {
  isOpenPreview: boolean;
  setIsOpenPreview: Dispatch<SetStateAction<boolean>>;
}

const Preview = ({ isOpenPreview, setIsOpenPreview }: PreviewPropsType) => {
  const generateListData = useRecoilValue(generateListState);

  return (
    <S.BlurBackground display={isOpenPreview ? 'flex' : 'none'}>
      <S.Preview>
        <S.PreviewWrap>
          <S.UserListBox>
            {generateListData.map((item) => (
              <UserInfoList
                key={item.username}
                username={item.username}
                password={item.password}
              />
            ))}
          </S.UserListBox>
          <S.ButtonBox>
            <MiniButton
              option="FILLED"
              value="확인"
              onClick={() => setIsOpenPreview(false)}
            />
            <MiniButton
              option="UNFILLED"
              value="인쇄하기"
              onClick={() => window.print()}
            />
          </S.ButtonBox>
        </S.PreviewWrap>
      </S.Preview>
    </S.BlurBackground>
  );
};

export default Preview;
