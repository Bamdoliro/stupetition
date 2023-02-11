import { color } from 'styles/theme';
import * as T from 'styles/text';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${color.white};
`;

export const Wrap = styled.div`
  width: 56.6%;
  height: 100%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 232px;
  width: 100%;
`;

export const Progress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 30px;
  border: 1px solid ${(props) => props.color};
  border-radius: 50px;
  color: ${(props) => props.color};
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  margin-bottom: 16px;
`;

export const InfoWrap = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 36px;
  border-bottom: 1px solid ${color.gray200};
`;

export const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled(T.H1)`
  color: ${color.gray900};
  max-width: 60%;
`;

export const Date = styled(T.p2)`
  color: ${color.gray500};
`;
