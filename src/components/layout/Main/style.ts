import BannerImg from 'assets/banner.svg';
import { color } from 'styles/theme';
import * as T from 'styles/text';
import styled from 'styled-components';

export const MainLayout = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
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
  padding-left: 100px;
  background-image: url(${BannerImg});
  background-size: cover;
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

export const ContentsInnerWrap = styled.div`
  width: 74.4%;
`;

export const SubNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 54px;
  margin: 60px 0px 32px 0px;
`;

export const PetitionWrap = styled.div`
  display: grid;
  grid-template-columns: 48.5% 48.5%;
  gap: 3%;
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
