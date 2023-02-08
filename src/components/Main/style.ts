import BannerImg from 'assets/banner.svg';
import { color } from 'styles/theme';
import * as T from 'styles/text';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${color.white};
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Banner = styled.div`
  display: flex;
  align-items: center;
  padding-left: 6.25rem;
  background-image: url(${BannerImg});
  height: 80%;
`;

export const BannerText = styled(T.D2)`
  color: ${color.gray900};
`;

export const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const PetitionWrap = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 30px;
  width: 74.4%;
`;
