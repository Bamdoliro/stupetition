import MiniButton from 'components/common/MiniButton';
import { Dispatch, SetStateAction } from 'react';
import * as S from './style';

interface PreviewPropsType {
  isOpenPreview: boolean;
  setIsOpenPreview: Dispatch<SetStateAction<boolean>>;
}

const Preview = ({ isOpenPreview, setIsOpenPreview }: PreviewPropsType) => {
  return (
    <S.BlurBackground display={isOpenPreview ? 'flex' : 'none'}>
      <S.Preview>
        <S.PreviewWrap>
          <S.UserListBox>
            <S.UserInfoList>
              <S.UserName>user name: sj060706</S.UserName>
              <S.Password>password: 12345678</S.Password>
            </S.UserInfoList>
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
