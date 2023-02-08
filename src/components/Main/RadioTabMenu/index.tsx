import * as S from './style';

const RadioTabMenu = () => {
  return (
    <S.Container>
      <S.TabButton>
        <S.RadioInput type="radio" id="name" name="filtering-radio" value="1" />
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
    </S.Container>
  );
};

export default RadioTabMenu;
