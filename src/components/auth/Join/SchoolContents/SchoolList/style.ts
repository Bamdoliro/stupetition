import styled from 'styled-components';
import * as T from 'styles/text';
import { color } from 'styles/theme';

export const List = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 18px 16px;
  align-items: center;
  height: 72px;
  width: 100%;
  border-bottom: 1px solid ${color.gray100};
`;

export const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SchoolName = styled(T.p)`
  color: ${color.gray900};
`;

export const Email = styled(T.caption)`
  color: ${color.gray500};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 36px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${color.main};
  color: ${color.white};
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
`;
