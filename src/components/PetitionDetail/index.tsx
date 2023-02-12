/* eslint-disable react/jsx-key */
import { ProgressChecker } from 'utills/ProgressChecker';
import Progressbar from 'components/common/Progressbar';
import { getPetitionDetail } from 'api/petition';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
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
  const [isAgreePetition, setIsAgreePetition] = useState<boolean>(false);
  return (
    <S.Container>
      <S.Wrap>
        <S.Info>
          <S.InfoWrap>
            <S.ItemWrap>
              <S.Progress color={color}>{progress}</S.Progress>
              <S.Title>{data?.title}</S.Title>
              <S.Date>2023-02-07 13:35</S.Date>
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
          <S.AgreeButton onClick={() => setIsAgreePetition(true)}>
            동의하기
          </S.AgreeButton>
        )}
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
