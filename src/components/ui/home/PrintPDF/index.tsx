import MiniButton from 'components/common/MiniButton';
import { generateListState } from 'atoms/generateList.atom';
import { useRecoilValue } from 'recoil';
import UserList from './UserList';
import * as S from './style';

const PrintPDF = () => {
  const generateListData = useRecoilValue(generateListState);

  return (
    <S.PrintPDFLayout>
      <S.PrintPDFWrap>
        <S.TextBox>
          <S.Title>인쇄용 pdf 다운로드</S.Title>
          <S.Desc>아래 pdf를 인쇄하여 학생들에게 나눠주세요.</S.Desc>
        </S.TextBox>
        <S.ButtonBox>
          <MiniButton
            onClick={() => window.print()}
            option="FILLED"
            value="다운로드"
          />
        </S.ButtonBox>
        <S.UserListWrap>
          <S.UserListHeader>
            <S.UserListHeaderItem>
              <S.UserListHeaderText>아이디</S.UserListHeaderText>
            </S.UserListHeaderItem>
            <S.UserListHeaderItem>
              <S.UserListHeaderText>비밀번호</S.UserListHeaderText>
            </S.UserListHeaderItem>
          </S.UserListHeader>
          <S.UserListBox>
            {generateListData.map((item) => (
              <UserList
                key={item.username}
                username={item.username}
                password={item.password}
              />
            ))}
          </S.UserListBox>
        </S.UserListWrap>
      </S.PrintPDFWrap>
    </S.PrintPDFLayout>
  );
};

export default PrintPDF;
