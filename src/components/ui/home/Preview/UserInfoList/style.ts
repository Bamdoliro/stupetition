import styled from 'styled-components';
import * as T from 'styles/text.style';
import { color } from 'styles/theme.style';

export const UserInfoList = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid ${color.gray100};
  padding-bottom: 8px;
`;

export const UserName = styled(T.p2)`
  color: ${color.gray900};
`;

export const Password = styled(T.p2)`
  color: ${color.gray900};
`;
