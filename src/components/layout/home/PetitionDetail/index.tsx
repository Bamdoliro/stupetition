import { ProgressChecker } from 'utils/ProgressChecker';
import Progressbar from 'components/shared/Progressbar';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { FormatDatetime } from 'utils/FormatDatetime';
import { userData } from 'atoms/user.atom';
import { useRecoilValue } from 'recoil';
import { DetailFeature } from 'features/home/petition/detail/detail.feature';
import { CommentFeature } from 'features/home/petition/comment/commnet.feature';
import { AnswerFeature } from 'features/home/petition/answer/answer.feature';
import { ApproveFeature } from 'features/home/petition/approve/approve.feature';
import Comment from './Comment';
import * as S from './style';

const PetitionDetail = () => {
  const { detailId } = useParams();
  const id = Number(detailId);
  const user = useRecoilValue(userData);
  const [comment, setComment] = useState('');

  // 쿼리
  const { isLoading, isError, data, refetch } = DetailFeature(id);
  const { commentSubmit } = CommentFeature({ id, setComment, comment });
  const { answerSubmit } = AnswerFeature({ id, setComment, comment });
  const { approveSubmit } = ApproveFeature(id);

  const { color, progress } = ProgressChecker(data?.status);
  const { date, time } = FormatDatetime(data?.createdAt);

  const [isApprovePetition, setIsApprovePetition] = useState<
    boolean | undefined
  >(data?.approved);

  const approveElement = isApprovePetition ? (
    <S.ApprovedButton>
      <S.ApproveText>동의 완료</S.ApproveText>
    </S.ApprovedButton>
  ) : (
    <S.ApproveButton onClick={approveSubmit}>
      <S.ApproveText>동의 하기</S.ApproveText>
    </S.ApproveButton>
  );

  return (
    <S.PetitionDetailLayout>
      <S.Wrap>
        <S.Info>
          <S.InfoWrap>
            <S.ItemWrap>
              <S.Progress color={color}>{progress}</S.Progress>
              <S.Title>{data?.title}</S.Title>
              <S.Date>
                {date} {time}
              </S.Date>
            </S.ItemWrap>
            <Progressbar
              option="DETAIL"
              width="150px"
              height="150px"
              numberOfAgreers={Number(data?.numberOfAgreers)}
            />
          </S.InfoWrap>
        </S.Info>
        <S.Content>
          <S.Pre>{data?.content}</S.Pre>
        </S.Content>
        {user.authority === 'ROLE_STUDENT_COUNCIL' ? '' : approveElement}
        <S.CommentSendWrap>
          <S.CommentSendInput
            placeholder={
              user.authority === 'ROLE_STUDENT_COUNCIL'
                ? '학생회의 답변을 써주세요.'
                : '댓글을 입력해주세요.'
            }
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          {user.authority === 'ROLE_STUDENT_COUNCIL' ? (
            <S.CommentSendButton onClick={answerSubmit}>
              <S.CommentSendText>답변 작성</S.CommentSendText>
            </S.CommentSendButton>
          ) : (
            <S.CommentSendButton onClick={commentSubmit}>
              <S.CommentSendText>댓글 작성</S.CommentSendText>
            </S.CommentSendButton>
          )}
        </S.CommentSendWrap>
        {data?.comments.map((item) => {
          return (
            <Comment
              key={item.id}
              id={item.id}
              comment={item.comment}
              createdAt={item.createdAt}
            />
          );
        })}
      </S.Wrap>
    </S.PetitionDetailLayout>
  );
};

export default PetitionDetail;
