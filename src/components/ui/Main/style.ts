import { color } from 'styles/theme.style';
import * as T from 'styles/text.style';
import styled from 'styled-components';

export const MainLayout = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background-color: ${color.white};
`;

export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ContentsWrap = styled.div`
  width: 74.4%;
`;

export const SubNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 48px 0px 32px 0px;
`;

export const PetitionListBox = styled.div`
  display: grid;
  grid-template-columns: 48.5% 48.5%;
  gap: 30px;
  width: 100%;
`;

export const CreatePetition = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  border-radius: 8px;
  background-color: ${color.main};
  &:hover {
    background-color: ${color.hover};
  }
`;

export const CreatePetitionText = styled(T.btn2)`
  color: ${color.white};
`;
