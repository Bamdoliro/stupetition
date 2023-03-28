import { GenerateStudentsListType } from 'types/user.type';
import Logo from 'assets/logo.svg';
import { useUser } from 'hooks/useUser';
import * as S from './style';

const PrintList = ({ username, password }: GenerateStudentsListType) => {
  const { user } = useUser();

  return (
    <S.PrintList>
      <S.PrintListWrap>
        <S.TextBox>
          <S.SchoolName>{user.schoolName}</S.SchoolName>
          <S.InfoBox>
            <S.Logo src={Logo} />
            <S.Info>학생청원 서비스 아이디 및 비밀번호</S.Info>
          </S.InfoBox>
        </S.TextBox>
        <S.Url>https://github.com/IntroduceMan</S.Url>
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
              <S.TableBodyItemText>{username}</S.TableBodyItemText>
            </S.TableBodyItem>
            <S.TableBodyItem>
              <S.TableBodyItemText>{password}</S.TableBodyItemText>
            </S.TableBodyItem>
          </S.TableBody>
        </S.Table>
      </S.PrintListWrap>
    </S.PrintList>
  );
};

export default PrintList;
