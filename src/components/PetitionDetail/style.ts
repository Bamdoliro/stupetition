import { color } from 'styles/theme';
import * as T from 'styles/text';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  background-color: ${color.white};
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const InfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${color.gray200};
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
`;

export const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const Title = styled(T.H1)`
  color: ${color.gray900};
  max-width: 80%;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Date = styled(T.p2)`
  color: ${color.gray500};
`;

export const Content = styled(T.p2)`
  padding-top: 3rem;
  text-align: left;
  color: ${color.gray900};
  width: 100%;
  word-break: break-all;
  max-width: 100%;
  min-height: 20%;
  margin-bottom: 7.5rem;
`;

export const ApproveButton = styled.button`
  width: 104px;
  height: 49px;
  padding: 12px 18px;
  background: ${color.main};
  border-radius: 8px;
  font-size: 1.125rem;
  line-height: 140%;
  letter-spacing: 0.15px;
  color: ${color.white};
`;

export const ApprovedButton = styled.button`
  width: 104px;
  height: 49px;
  padding: 12px 18px;
  background: ${color.gray400};
  border-radius: 8px;
  font-size: 1.125rem;
  line-height: 140%;
  letter-spacing: 0.15px;
  color: ${color.white};
  cursor: default;
`;

export const CommentSendWrap = styled.div`
  margin: 3.75rem 0rem 2.5rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`;

export const CommentSendInput = styled.textarea`
  padding: 16px 12px;
  resize: none;
  width: 100%;
  height: 90px;
  border: 1px solid ${color.gray300};
  border-radius: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: ${color.gray500};
`;

export const CommentSendButton = styled.button`
  margin-top: 0.75rem;
  width: 104px;
  height: 49px;
  border-radius: 8px;
  background-color: ${color.white};
  border: 1px solid ${color.main};
  color: ${color.main};
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
`;

export const CommentWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
