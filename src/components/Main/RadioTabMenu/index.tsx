import * as S from './style';

const RadioTabMenu = () => {
  return (
    <S.Container>
      <S.TabButton>
        <S.RadioInput
          type="radio"
          name="filtering-radio"
          id="PETITION"
          value="PETITION"
        />
        <S.RadioLabel htmlFor="PETITION">진행중</S.RadioLabel>
      </S.TabButton>
      <S.TabButton>
        <S.RadioInput
          type="radio"
          name="filtering-radio"
          id="WAITING"
          value="WAITING"
        />
        <S.RadioLabel htmlFor="WAITING">대기중</S.RadioLabel>
      </S.TabButton>
      <S.TabButton>
        <S.RadioInput
          type="radio"
          name="filtering-radio"
          id="ANSWERED"
          value="ANSWERED"
        />
        <S.RadioLabel htmlFor="ANSWERED">완료</S.RadioLabel>
      </S.TabButton>
    </S.Container>
  );
};

export default RadioTabMenu;
