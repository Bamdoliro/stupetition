import BannerImg from 'assets/banner.svg';
import { color } from 'styles/theme';
import * as T from 'styles/text';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${color.white};
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
