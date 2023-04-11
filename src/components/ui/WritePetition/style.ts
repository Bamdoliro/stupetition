import { color } from 'styles/theme.style';
import styled from 'styled-components';

export const WritePetitionLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${color.white};
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 72px;
  margin-bottom: 46px;
`;

export const HeaderWrap = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ContentsBox = styled.div`
  width: 56.6%;
  height: 70%;
`;

export const TitleInput = styled.input`
  font-weight: 700;
  font-size: 36px;
  line-height: 140%;
  letter-spacing: 0.25px;
  width: 100%;
  margin-bottom: 39px;
  &::placeholder {
    color: ${color.gray200};
  }
`;

export const ContentInput = styled.textarea`
  padding: 16px 20px;
  border: 1px solid ${color.gray200};
  border-radius: 8px;
  width: 100%;
  height: 100%;
  resize: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  &::placeholder {
    color: ${color.gray400};
  }
`;
