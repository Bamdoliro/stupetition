/* eslint-disable react/jsx-key */
import { ProgressChecker } from 'utills/ProgressChecker';
import Progressbar from 'components/common/Progressbar';
import { getBoardDetail } from 'api/board';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { GetBoardDetailType } from 'type/board/board.type';
import Comment from './Comment';
import * as S from './style';

const PetitionDetail = () => {
  const { id } = useParams();

  const { isLoading, isError, data } = useQuery<GetBoardDetailType>(
    ['id', Number(id)],
    () => getBoardDetail(Number(id)),
  );
  console.log(data?.agreerComments);
  const { color, progress } = ProgressChecker('PETITION');

  return (
    <S.Container>
      <S.Wrap>
        <S.Info>
          <S.Progress color={color}>{progress}</S.Progress>
          <S.InfoWrap>
            <S.ItemWrap>
              <S.Title>{data?.title}</S.Title>
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
        <S.Content>{data?.content}</S.Content>
        <S.AreeButton>동의하기</S.AreeButton>
        <S.CommentSendWrap>
          <S.CommentSendInput placeholder="댓글을 입력해주세요." />
          <S.CommentSendButton>댓글 작성</S.CommentSendButton>
        </S.CommentSendWrap>
        {data?.agreerComments.map((item) => {
          return (
            // 백엔드가 id 추가하면 id 넣자
            <Comment comment={item.comment} createdAt={item.createdAt} />
          );
        })}
      </S.Wrap>
    </S.Container>
  );
};

export default PetitionDetail;
