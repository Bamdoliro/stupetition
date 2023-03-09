import * as T from 'styles/text.style';
import { color } from 'styles/theme.style';
import styled from 'styled-components';

export const UserList = styled.div`
  height: 60px;
  background-color: ${color.white};
  border-bottom: 1px solid ${color.gray200};
  display: flex;
  align-items: center;
`;

export const UserListItem = styled.div`
  padding: 0px 16px;
  width: 50%;
`;

export const UserListText = styled(T.p1)`
  color: ${color.gray900};
`;
