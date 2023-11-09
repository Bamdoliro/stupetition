import BannerImg from 'assets/banner.png';
import { color } from 'styles/theme.style';
import { font } from 'styles/text.style';
import styled from 'styled-components';

export const Banner = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${BannerImg});
  background-size: cover;
  height: 50%;
`;

export const BannerWrap = styled.div`
  ${font.D2}
  color: ${color.gray900};

  width: 74.4%;
`;

export const Close = styled.p`
  ${font.caption}
  position: absolute;
  color: ${color.gray600};
  border-bottom: 1px solid ${color.gray600};
  cursor: pointer;
  right: 32px;
  bottom: 21px;
`;
