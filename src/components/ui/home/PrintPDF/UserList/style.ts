import * as T from 'styles/text.style';
import { color } from 'styles/theme.style';
import styled from 'styled-components';

export const UserList = styled.div`
  width: 600px;
  height: 300px;
  display: flex;
  justify-content: center;
  background-color: ${color.white};
  border: 1px solid ${color.gray200};
`;

export const UserListWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const SchoolName = styled(T.p3)`
  color: ${color.gray900};
`;

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Info = styled(T.H5)`
  color: ${color.gray900};
`;

export const Logo = styled.img``;

export const Url = styled(T.caption)`
  text-align: center;
`;

export const Table = styled.div`
  width: 380px;
`;

export const TableHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const TableHeaderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 50px;
  background-color: ${color.gray50};
`;

export const TableHeaderItemText = styled(T.p2)`
  color: ${color.gray700};
`;

export const TableBody = styled.div`
  display: flex;
  align-items: center;
`;

export const TableBodyItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 50px;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: ${color.gray100};
`;

export const TableBodyItemText = styled(T.p2)`
  color: ${color.gray900};
`;
