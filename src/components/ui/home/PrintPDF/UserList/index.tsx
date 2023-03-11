import { GenerateStudentsListType } from 'types/user.type';
import Logo from 'assets/logo.svg';
import * as S from './style';

const UserList = ({ username, password }: GenerateStudentsListType) => {
  return (
    <S.UserList>
      <S.UserListWrap>
        <S.TextBox>
          <S.SchoolName>부산소프트웨어마이스터고등학교</S.SchoolName>
          <S.InfoBox>
            <S.Logo src={Logo} />
            <S.Info>학생청원 서비스 아이디 및 비밀번호</S.Info>
          </S.InfoBox>
        </S.TextBox>
        <S.Url>학생청원 접속: https://github.com/IntroduceMan</S.Url>
        <S.Table>
          <S.TableHeader>
            <S.TableHeaderItem>
              <S.TableHeaderItemText>아이디</S.TableHeaderItemText>
            </S.TableHeaderItem>
            <S.TableHeaderItem>
              <S.TableHeaderItemText>비밀번호</S.TableHeaderItemText>
            </S.TableHeaderItem>
          </S.TableHeader>
          <S.TableBody>
            <S.TableBodyItem>
              <S.TableBodyItemText>sj060706</S.TableBodyItemText>
            </S.TableBodyItem>
            <S.TableBodyItem>
              <S.TableBodyItemText>m3w3honfg00!</S.TableBodyItemText>
            </S.TableBodyItem>
          </S.TableBody>
        </S.Table>
      </S.UserListWrap>
    </S.UserList>
  );
};

export default UserList;
