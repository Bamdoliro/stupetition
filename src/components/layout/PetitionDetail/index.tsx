import { ProgressChecker } from 'utils/ProgressChecker';
import Progressbar from 'components/shared/Progressbar';
import {
  answerPetition,
  approvePetition,
  commentPetition,
  getPetitionDetail,
} from 'apis/petition.api';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { GetPetitionDetailType } from 'types/petition/petition.type';
import { useState } from 'react';
import { FormatDatetime } from 'utils/FormatDatetime';
import { userData } from 'atoms/user';
import { useRecoilValue } from 'recoil';
import Comment from './Comment';
import * as S from './style';

const PetitionDetail = () => {
  const { id } = useParams();
  const user = useRecoilValue(userData);

  const { isLoading, isError, data, refetch } = useQuery<GetPetitionDetailType>(
    ['id', Number(id)],
    () => getPetitionDetail(Number(id)),
  );
  const { color, progress } = ProgressChecker(data?.status);
  const { date, time } = FormatDatetime(data?.createdAt);

  const [isApprovePetition, setIsApprovePetition] = useState<
    boolean | undefined
  >(data?.approved);
  const [comment, setComment] = useState('');

  const approveMutate = useMutation(approvePetition, {
    onSuccess: () => {
      alert('동의 완료 !!');
      refetch();
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const commentMutate = useMutation(commentPetition, {
    onSuccess: () => {
      setComment('');
      refetch();
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const answerMutate = useMutation(answerPetition, {
    onSuccess: () => {
      setComment('');
      refetch();
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const approveSubmit = () => {
    approveMutate.mutate(Number(id));
  };

  const commentSubmit = () => {
    commentMutate.mutate({
      comment,
      petitionId: Number(id),
    });
  };

  const answerSubmit = () => {
    answerMutate.mutate({
      comment,
      petitionId: Number(id),
    });
  };

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
    <S.Container>
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
    </S.Container>
  );
};

export default PetitionDetail;
