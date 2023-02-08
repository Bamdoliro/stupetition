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

export const TabMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 276px;
  height: 54px;
  border-radius: 100px;
  padding: 0.375rem;
  background-color: ${color.gray50};
`;

export const TabButton = styled.div`
  height: 42px;
  width: 84px;
`;

export const RadioInput = styled.input`
  display: none;
`;

export const RadioLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 100px;

  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: ${color.black};
  ${RadioInput}:checked + & {
    color: ${color.white};
    background-color: ${color.main};
  }
`;
