import { ProgressChecker } from 'utils/ProgressChecker';
import Progressbar from 'components/common/Progressbar';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { FormatDatetime } from 'utils/FormatDatetime';
import Loading from 'pages/Loading';
import NotFound from 'pages/404';
import { useModal } from 'hooks/useModal';
import Modal from 'components/common/Modal';
import { useUser } from 'hooks/useUser';
import { EmailReplace } from 'utils/EmailReplace';
import {
  useApprovePetitionMutation,
  useDeletePetitionMutation,
  useWriteCommentMutation,
  usePetitionDetail,
  useWriteAnswerMutation,
} from 'features/PetitionFeature';
import Comment from './Comment';
import * as S from './style';

const PetitionDetail = () => {
  const { openModal, closeModal } = useModal();

  const { id } = useParams();
  const petitionId = Number(id);
  const { user } = useUser();
  const [comment, setComment] = useState('');

  const approveMutate = useApprovePetitionMutation(petitionId);
  const writeCommentMutate = useWriteCommentMutation({
    petitionId,
    setComment,
    comment,
  });
  const writeAnswerMutate = useWriteAnswerMutation({
    petitionId,
    setComment,
    comment,
  });
  const deletePetitionMutate = useDeletePetitionMutation(petitionId);
  const { isLoading, isError, data } = usePetitionDetail(petitionId);

  const { color, progress } = ProgressChecker(data.status);
  const { date } = FormatDatetime(data.createdAt);
  const { userEmail } = EmailReplace(data.writer.email);

  const checkDeletePetition = () => {
    openModal(
      <Modal
        option="CONFIRM"
        title="청원 삭제"
        content={<p>정말 청원을 삭제 하시겠습니까?</p>}
        closeText="취소"
        confirmText="삭제"
        handleClose={closeModal}
        handleConfirm={() => deletePetitionMutate.mutate()}
      />,
    );
  };

  if (isError) {
    return <NotFound />;
  }

  return (
    <S.PetitionDetailLayout>
      <S.PetitionDetailWrap>
        {isError && <NotFound />}
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <S.InfoBox>
              <S.InfoWrap>
                <S.ItemsBox>
                  <S.Progress color={color}>{progress}</S.Progress>
                  <S.Title>{data.title}</S.Title>
                  <S.PetitionInfo>
                    <S.Date>{date}</S.Date>|
                    <S.Email>
                      {data.writer.name} #{userEmail}
                    </S.Email>
                  </S.PetitionInfo>
                  {data.hasPermission && (
                    <S.Delete onClick={checkDeletePetition}>삭제</S.Delete>
                  )}
                </S.ItemsBox>
                <Progressbar
                  option="DETAIL"
                  width="150px"
                  height="150px"
                  numberOfApprover={Number(data.numberOfApprover)}
                  percentageOfApprover={data.percentageOfApprover}
                />
              </S.InfoWrap>
            </S.InfoBox>
            <S.ContentBox>
              <S.Content>{data.content}</S.Content>
            </S.ContentBox>
            {user.authority === 'ROLE_STUDENT_COUNCIL' ||
            data.hasPermission ? null : data.approved ? (
              <S.ApprovedButton>
                <S.ApproveText>동의 완료</S.ApproveText>
              </S.ApprovedButton>
            ) : (
              <S.ApproveButton onClick={() => approveMutate.mutate()}>
                <S.ApproveText>동의하기</S.ApproveText>
              </S.ApproveButton>
            )}
            <S.CommentSendBox>
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
                <S.CommentSendButton onClick={() => writeAnswerMutate.mutate()}>
                  <S.CommentSendText>답변 작성</S.CommentSendText>
                </S.CommentSendButton>
              ) : (
                <S.CommentSendButton
                  onClick={() => writeCommentMutate.mutate()}
                >
                  <S.CommentSendText>댓글 작성</S.CommentSendText>
                </S.CommentSendButton>
              )}
            </S.CommentSendBox>
            <S.CommentListBox>
              {data.answer?.map((item) => (
                <Comment
                  option="STUDENT_COUNCIL"
                  key={item.id}
                  id={item.id}
                  comment={item.comment}
                  hasPermission={item.hasPermission}
                  createdAt={item.createdAt}
                  writer={item.writer}
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
                  writer={item.writer}
                />
              ))}
            </S.CommentListBox>
          </>
        )}
      </S.PetitionDetailWrap>
    </S.PetitionDetailLayout>
  );
};

export default PetitionDetail;
