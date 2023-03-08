import { generateListState } from 'atoms/generateList.atom';
import MiniButton from 'components/common/MiniButton';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import * as S from './style';
import UserInfoList from './UserInfoList';

const Preview = () => {
  const navigate = useNavigate();
  const generateListData = useRecoilValue(generateListState);

  return (
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
            onClick={() => navigate('/')}
          />
          <MiniButton
            option="UNFILLED"
            value="인쇄하기"
            onClick={() => window.print()}
          />
        </S.ButtonBox>
      </S.PreviewWrap>
    </S.Preview>
  );
};

export default Preview;
