import styled from 'styled-components';
import { font } from 'styles/text.style';
import { color } from 'styles/theme.style';

export const Comment = styled.div`
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
  gap: 12px;
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

export const Name = styled.p`
  ${font.p1}
  color: ${color.gray900};
`;

export const Date = styled.p`
  ${font.p3}
  color: ${color.gray500};
`;

export const Delete = styled.p`
  ${font.p3}
  color: ${color.gray600};
  cursor: pointer;
  &:hover {
    text-decoration-line: underline;
    text-decoration-color: ${color.gray600};
  }
`;

export const Content = styled.p`
  ${font.p2}
  white-space: pre-line;
  color: ${color.gray900};
  width: 87%;
  word-break: break-all;
  max-width: 87%;
  margin-bottom: 28px;
`;
