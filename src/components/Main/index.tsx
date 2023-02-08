import * as S from './style';

const Main = () => {
  return (
    <S.Container>
      <S.Banner>
        <S.BannerText>
          학생청원,
          <br />
          학생들의 목소리를 듣다
        </S.BannerText>
      </S.Banner>
      <S.ContentsWrap>
        <S.TabMenu>
          <S.TabButton>
            <S.RadioInput
              type="radio"
              id="name"
              name="filtering-radio"
              value="1"
            />
            <S.RadioLabel htmlFor="name">진행중</S.RadioLabel>
          </S.TabButton>
          <S.TabButton>
            <S.RadioInput
              type="radio"
              id="name2"
              name="filtering-radio"
              value="1"
            />
            <S.RadioLabel htmlFor="name2">대기중</S.RadioLabel>
          </S.TabButton>
          <S.TabButton>
            <S.RadioInput
              type="radio"
              id="name3"
              name="filtering-radio"
              value="1"
            />
            <S.RadioLabel htmlFor="name3">완료</S.RadioLabel>
          </S.TabButton>
        </S.TabMenu>
      </S.ContentsWrap>
    </S.Container>
  );
};

export default Main;
