import { ProgressChecker } from 'utils/ProgressChecker';
import Progressbar from 'components/common/Progressbar';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { FormatDatetime } from 'utils/FormatDatetime';
import { userState } from 'atoms/user.atom';
import { useRecoilValue } from 'recoil';
import { DetailFeature } from 'features/home/detail.feature';
import { CommentFeature } from 'features/home/commnet.feature';
import { AnswerFeature } from 'features/home/answer.feature';
import { ApproveFeature } from 'features/home/approve.feature';
import Comment from './Comment';
import * as S from './style';

const PetitionDetail = () => {
  const { id } = useParams();
  const petitionId = Number(id);
  const user = useRecoilValue(userState);
  const [comment, setComment] = useState('');

  // 쿼리
  const { isLoading, isError, data } = DetailFeature(petitionId);
  const { commentSubmit } = CommentFeature({ petitionId, setComment, comment });
  const { answerSubmit } = AnswerFeature({ petitionId, setComment, comment });
  const { approveSubmit } = ApproveFeature(petitionId);

  const { color, progress } = ProgressChecker(data.status);
  const { date, time } = FormatDatetime(data.createdAt);

  console.log(data);

  return (
    <S.PetitionDetailLayout>
      <S.Wrap>
        <S.Info>
          <S.InfoWrap>
            <S.ItemWrap>
              <S.Progress color={color}>{progress}</S.Progress>
              <S.Title>{data.title}</S.Title>
              <S.Date>
                {date} {time}
              </S.Date>
            </S.ItemWrap>
            <Progressbar
              option="DETAIL"
              width="150px"
              height="150px"
              numberOfApprover={Number(data.numberOfApprover)}
            />
          </S.InfoWrap>
        </S.Info>
        <S.Content>
          <S.Pre>{data.content}</S.Pre>
        </S.Content>
        {user.authority === 'ROLE_STUDENT_COUNCIL' ? null : data.approved ? (
          <S.ApprovedButton>
            <S.ApproveText>동의 완료</S.ApproveText>
          </S.ApprovedButton>
        ) : (
          <S.ApproveButton onClick={approveSubmit}>
            <S.ApproveText>동의 하기</S.ApproveText>
          </S.ApproveButton>
        )}
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
        {data.answer?.map((item) => (
          <Comment
            option="STUDENT_COUNCIL"
            key={item.id}
            id={item.id}
            comment={item.comment}
            createdAt={item.createdAt}
          />
        ))}
        {data.comments?.map((item) => (
          <Comment
            option="STUDENT"
            key={item.id}
            id={item.id}
            writer={item.writer}
            comment={item.comment}
            createdAt={item.createdAt}
          />
        ))}
      </S.Wrap>
    </S.PetitionDetailLayout>
  );
};

export default PetitionDetail;
