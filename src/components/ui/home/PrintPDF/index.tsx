import MiniButton from 'components/common/MiniButton';
import * as S from './style';

const PrintPDF = () => {
  return (
    <S.PrintPDFLayout>
      <S.PrintPDFWrap>
        <S.TextBox>
          <S.Title>인쇄용 pdf 다운로드</S.Title>
          <S.Desc>아래 pdf를 인쇄하여 학생들에게 나눠주세요.</S.Desc>
        </S.TextBox>
        <S.ButtonBox>
          <MiniButton
            onClick={() => console.log('디운로드')}
            option="FILLED"
            value="다운로드"
          />
          <MiniButton
            onClick={() => console.log('미리보기')}
            option="UNFILLED"
            value="미리보기"
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
          <S.UserList>
            <S.UserListItem>
              <S.UserListHeaderText>sj060706</S.UserListHeaderText>
            </S.UserListItem>
            <S.UserListItem>
              <S.UserListHeaderText>123456789</S.UserListHeaderText>
            </S.UserListItem>
          </S.UserList>
        </S.UserListWrap>
      </S.PrintPDFWrap>
    </S.PrintPDFLayout>
  );
};

export default PrintPDF;
