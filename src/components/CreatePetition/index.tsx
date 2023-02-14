import * as S from './style';

const CreatePetition = () => {
  return (
    <S.Container>
      <S.Header>
        <S.HeaderWrap>
          <S.UnfilledButton>
            <S.UnfilledButtonText>취소</S.UnfilledButtonText>
          </S.UnfilledButton>
          <S.FilledButton>
            <S.FilledButtonText>확인</S.FilledButtonText>
          </S.FilledButton>
        </S.HeaderWrap>
      </S.Header>
      <S.ContentsWrap>
        <S.TitleInput placeholder="제목을 입력해 주세요." maxLength={40} />
        <S.ContentInput placeholder="청원 내용을 입력하세요." />
      </S.ContentsWrap>
    </S.Container>
  );
};

export default CreatePetition;
