import * as T from 'styles/text';
import { color } from 'styles/theme';
import styled from 'styled-components';

export const PetitionList = styled.div`
  display: flex;
  height: 140px;
  width: 100%;
  border: 1px solid black;
  border: 1px solid ${color.gray200};
  border-radius: 16px;
  cursor: pointer;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0px 24px;
`;

export const Info = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

export const Title = styled(T.H4)`
  color: ${color.gray900};
  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const DetailInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Date = styled(T.p3)`
  color: ${color.gray600};
`;

export const Progress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 24px;
  border: 1px solid ${(props) => props.color};
  border-radius: 50px;
  color: ${(props) => props.color};
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 160%;
`;
