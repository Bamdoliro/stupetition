import * as T from 'styles/text';
import { color } from 'styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 140px;
  width: 700px;
  border: 1px solid black;
  border: 1px solid ${color.gray200};
  border-radius: 16px;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0px 24px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

export const Title = styled(T.H4)`
  color: ${color.gray900};
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
  font-size: 12px;
  line-height: 160%;
`;

export const ProgressBarWrap = styled.div`
  width: 96px;
  height: 96px;
`;

export const Percent = styled(T.H5)`
  color: ${color.gray600};
`;

export const Personnel = styled(T.caption)`
  color: ${color.gray600};
`;
