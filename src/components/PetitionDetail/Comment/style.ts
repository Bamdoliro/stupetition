import * as T from 'styles/text';
import styled from 'styled-components';
import { color } from 'styles/theme';

export const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid ${color.gray200};
  margin-bottom: 28px;
`;

export const Info = styled.div`
  display: flex;
`;

export const InfoWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 24px;
`;

export const ProfileWrap = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
`;

export const Profile = styled.img`
  width: 56px;
  height: 56px;
`;

export const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameWrap = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
`;

export const Name = styled(T.p1)`
  color: ${color.gray900};
`;

export const Check = styled.img`
  width: 24px;
  height: 24px;
`;

export const Date = styled(T.p3)`
  color: ${color.gray500};
`;

export const Delete = styled(T.p3)`
  color: ${color.gray600};
  cursor: pointer;
  &:hover {
    text-decoration-line: underline;
    text-decoration-color: ${color.gray600};
  }
`;

export const Comment = styled(T.p2)`
  color: ${color.gray900};
  width: 87%;
  word-break: break-all;
  max-width: 87%;
  margin-bottom: 28px;
`;
