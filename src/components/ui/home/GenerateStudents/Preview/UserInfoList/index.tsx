import { GenerateStudentsListType } from 'types/user.type';
import * as S from './style';

const UserInfoList = ({ username, password }: GenerateStudentsListType) => {
  return (
    <S.UserInfoList>
      <S.UserName>user name: {username}</S.UserName>
      <S.Password>password: {password}</S.Password>
    </S.UserInfoList>
  );
};

export default UserInfoList;
