import { ProgressChecker } from 'utils/ProgressChecker';
import Progressbar from 'components/common/Progressbar';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { FormatDatetime } from 'utils/FormatDatetime';
import { userState } from 'atoms/user.atom';
import { useRecoilValue } from 'recoil';
import { DetailFeature } from 'features/home/detail.feature';
import { ReplyFeature } from 'features/home/reply.feature';
import { ApproveFeature } from 'features/home/approve.feature';
import Loading from 'pages/Loading';
import NotFound from 'pages/404';
import DeletePetitionFeature from 'features/home/deletePetition.feature';
import { useModal } from 'hooks/useModal';
import Modal from 'components/common/Modal';
import Comment from './Comment';
import * as S from './style';

const PetitionDetail = () => {
  const { openModal, closeModal } = useModal();

  const { id } = useParams();
  const petitionId = Number(id);
  const user = useRecoilValue(userState);
  const [comment, setComment] = useState('');

  // 쿼리
  const { isLoading, isError, data } = DetailFeature(petitionId);
  const { replySubmit } = ReplyFeature({ petitionId, setComment, comment });
  const { approveSubmit } = ApproveFeature(petitionId);
  const { deleteSubmit } = DeletePetitionFeature(petitionId);

  const { color, progress } = ProgressChecker(data.status);
  const { date, time } = FormatDatetime(data.createdAt);

  const deletePetition = () => {
    openModal(
      <Modal
        option="CONFIRM"
        title="청원 삭제"
        content="정말 청원을 삭제 하시겠습니까?"
        closeText="취소"
        confirmText="삭제"
        handleClose={closeModal}
        handleConfirm={deleteSubmit}
      />,
    );
  };

  if (isError) {
    return <NotFound />;
  }

  return (
    <S.PetitionDetailLayout>
      <S.Wrap>
        {isError && <NotFound />}
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <S.Info>
              <S.InfoWrap>
                <S.ItemWrap>
                  <S.Progress color={color}>{progress}</S.Progress>
                  <S.Title>{data.title}</S.Title>
                  <S.Date>
                    {date} {time}
                  </S.Date>
                  {data.hasPermission && (
                    <S.Delete onClick={deletePetition}>삭제</S.Delete>
                  )}
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
            {user.authority === 'ROLE_STUDENT_COUNCIL' ||
            user.username === data.writer.username ? null : data.approved ? (
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
                <S.CommentSendButton
                  onClick={() => replySubmit('STUDENT_COUNCIL')}
                >
                  <S.CommentSendText>답변 작성</S.CommentSendText>
                </S.CommentSendButton>
              ) : (
                <S.CommentSendButton onClick={() => replySubmit('STUDENT')}>
                  <S.CommentSendText>댓글 작성</S.CommentSendText>
                </S.CommentSendButton>
              )}
            </S.CommentSendWrap>
            <S.CommentWrap>
              {data.answer?.map((item) => (
                <Comment
                  option="STUDENT_COUNCIL"
                  key={item.id}
                  id={item.id}
                  comment={item.comment}
                  hasPermission={item.hasPermission}
                  createdAt={item.createdAt}
                />
              ))}
              {data.comments?.map((item) => (
                <Comment
                  option="STUDENT"
                  key={item.id}
                  id={item.id}
                  hasPermission={item.hasPermission}
                  comment={item.comment}
                  createdAt={item.createdAt}
                />
              ))}
            </S.CommentWrap>
          </>
        )}
      </S.Wrap>
    </S.PetitionDetailLayout>
  );
};

export default PetitionDetail;
