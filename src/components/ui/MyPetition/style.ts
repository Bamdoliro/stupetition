import { color } from 'styles/theme.style';
import styled from 'styled-components';

export const MyPetitionLayout = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background-color: ${color.white};
`;

export const MyPetitionWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ContentsBox = styled.div`
  width: 74.4%;
`;

export const RadioTabMenuWrap = styled.div`
  margin: 48px 0px 32px 0px;
`;

export const PetitionListBox = styled.div`
  display: grid;
  grid-template-columns: 49% 49%;
  row-gap: 7%;
  column-gap: 2%;
  width: 100%;
`;
