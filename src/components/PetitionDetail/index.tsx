import { ProgressChecker } from 'utills/ProgressChecker';
import Progressbar from 'components/common/Progressbar';
import {
  approvePetition,
  commentPetition,
  getPetitionDetail,
} from 'api/petition';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { GetPetitionDetailType } from 'type/petition/petition.type';
import { useState } from 'react';
import Comment from './Comment';
import * as S from './style';

const PetitionDetail = () => {
  const { id } = useParams();
  const { isLoading, isError, data } = useQuery<GetPetitionDetailType>(
    ['id', Number(id)],
    () => getPetitionDetail(Number(id)),
  );
  const { color, progress } = ProgressChecker(data?.status);
  const [isAgreePetition, setIsAgreePetition] = useState<boolean | undefined>(
    data?.approved,
  );
  const date = data?.createdAt?.split('T');
  const [isComment, setComment] = useState('');

  const approve = useMutation(approvePetition, {
    onSuccess: () => {
      alert('동의 완료 !!');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const approveSubmit = () => {
    approve.mutate(Number(id));
  };

  const comment = useMutation(commentPetition, {
    onSuccess: () => {
      alert('댓글 써짐 !!');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const commentSubmit = () => {
    comment.mutate({
      comment: isComment,
      petitionId: Number(id),
    });
  };

  return (
    <S.Container>
      <S.Wrap>
        <S.Info>
          <S.InfoWrap>
            <S.ItemWrap>
              <S.Progress color={color}>{progress}</S.Progress>
              <S.Title>{data?.title}</S.Title>
              <S.Date>{`${date?.[0]} ${date?.[1]}`}</S.Date>
            </S.ItemWrap>
            <Progressbar
              option="DETAIL"
              width="150px"
              height="150px"
              numberOfAgreers={Number(data?.numberOfAgreers)}
            />
          </S.InfoWrap>
        </S.Info>
        <S.Content>{data?.content}</S.Content>
        {isAgreePetition ? (
          <S.AgreedButton>동의 완료</S.AgreedButton>
        ) : (
          <S.AgreeButton onClick={approveSubmit}>동의하기</S.AgreeButton>
        )}
        <S.CommentSendWrap>
          <S.CommentSendInput
            placeholder="댓글을 입력해주세요."
            onChange={(e) => setComment(e.target.value)}
          />
          <S.CommentSendButton onClick={commentSubmit}>
            댓글 작성
          </S.CommentSendButton>
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
