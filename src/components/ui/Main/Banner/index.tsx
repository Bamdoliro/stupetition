import { SetStateAction, Dispatch } from 'react';
import * as S from './style';

interface PropsType {
  setIsBannerOpen: Dispatch<SetStateAction<boolean>>;
}

const Banner = ({ setIsBannerOpen }: PropsType) => {
  return (
    <S.Banner>
      <S.BannerWrap>
        <S.BannerText>
          학생청원,
          <br />
          학생들의 목소리를 듣다
        </S.BannerText>
        <S.Close onClick={() => setIsBannerOpen(false)}>X 닫기</S.Close>
      </S.BannerWrap>
    </S.Banner>
  );
};

export default Banner;
