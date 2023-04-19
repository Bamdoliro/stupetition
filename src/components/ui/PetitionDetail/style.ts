import { color } from 'styles/theme.style';
import styled from 'styled-components';
import { font } from 'styles/text.style';

export const PetitionDetailLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background-color: ${color.white};
`;

export const PetitionDetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 56.6%;
  height: 100%;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
`;

export const InfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
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
  font-size: 0.875rem;
  line-height: 160%;
`;

export const ItemsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const Title = styled.p`
  ${font.H1}
  color: ${color.gray900};
  max-width: 80%;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ItemRowWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const PetitionInfo = styled.div`
  display: flex;
  align-items: center;
  color: ${color.gray500};
  gap: 8px;
`;

export const Date = styled.p`
  ${font.p2}
  color: ${color.gray500};
`;

export const Email = styled.p`
  ${font.p2}
  color: ${color.gray500};
`;

export const ContentBox = styled.div`
  width: 100%;
  word-break: break-all;
`;

export const Content = styled.p`
  ${font.p2}
  white-space: pre-line;
  text-align: left;
  color: ${color.gray900};
  min-height: 200px;
`;

export const ApproveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 18px;
  background: ${color.main};
  border-radius: 8px;
  color: ${color.white};
`;

export const ApprovedButton = styled.button`
  ${font.H5}
  color: ${color.white};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 18px;
  background: ${color.gray400};
  border-radius: 8px;
  color: ${color.white};
  cursor: default;
`;

export const CommentSendBox = styled.div`
  margin: 50px 0px;
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
  font-size: 1rem;
  line-height: 160%;
  color: ${color.gray900};
  &::placeholder {
    color: ${color.gray400};
  }
`;

export const CommentSendButton = styled.button`
  ${font.btn1}
  color: ${color.main};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  border-radius: 8px;
  background-color: ${color.white};
  border: 1px solid ${color.main};
  color: ${color.main};
  padding: 10px 16px;
`;

export const CommentListBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
