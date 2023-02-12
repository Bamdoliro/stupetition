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
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 6.25rem;
  background-image: url(${BannerImg});
  height: 70%;
`;

export const BannerText = styled(T.D2)`
  color: ${color.gray900};
`;

export const CloseBanner = styled(T.caption)`
  position: absolute;
  color: ${color.gray600};
  border-bottom: 1px solid ${color.gray600};
  cursor: pointer;
  right: 32px;
  bottom: 21px;
`;

export const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SubNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 74.4%;
  height: 54px;
  margin: 3.75rem 2rem;
`;

export const PetitionWrap = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 30px;
  width: 74.4%;
`;

export const CreatePetition = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 115px;
  height: 100%;
  border: 1px solid ${color.gray200};
  border-radius: 12px;
`;

export const Img = styled.img``;

export const CreatePetitionText = styled(T.p2)`
  color: ${color.gray900};
`;
