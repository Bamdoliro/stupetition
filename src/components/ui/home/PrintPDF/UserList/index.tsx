import { GenerateStudentsListType } from 'types/user.type';
import * as S from './style';

const UserList = ({ username, password }: GenerateStudentsListType) => {
  return (
    <S.UserList>
      <S.UserListItem>
        <S.UserListText>{username}</S.UserListText>
      </S.UserListItem>
      <S.UserListItem>
        <S.UserListText>{password}</S.UserListText>
      </S.UserListItem>
    </S.UserList>
  );
};

export default UserList;
