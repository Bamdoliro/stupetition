import { ProgressChecker } from 'utills/ProgressChecker';
import Progressbar from 'components/common/Progressbar';
import * as S from './style';

const PetitionDetail = () => {
  const { color, progress } = ProgressChecker('PETITION');

  return (
    <S.Container>
      <S.Wrap>
        <S.Info>
          <S.Progress color={color}>{progress}</S.Progress>
          <S.InfoWrap>
            <S.ItemWrap>
              <S.Title>김석진이 소개과를 가지 못하도록 동참해주세요.</S.Title>
              <S.Date>2023-02-07 13:35</S.Date>
            </S.ItemWrap>
            <Progressbar
              option="DETAIL"
              width="9.375rem"
              height="9.375rem"
              numberOfAgreers={10}
            />
          </S.InfoWrap>
        </S.Info>
        <S.Content>r</S.Content>
        <S.AreeButton>동의하기</S.AreeButton>
        <S.CommentWrap>
          <S.CommentInput placeholder="댓글을 입력해주세요." />
          <S.CommentSendButton>댓글 작성</S.CommentSendButton>
        </S.CommentWrap>
      </S.Wrap>
    </S.Container>
  );
};

export default PetitionDetail;
