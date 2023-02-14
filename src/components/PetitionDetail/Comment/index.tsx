import { deleteCommentPetition } from 'api/petition';
import ProfileSvg from 'assets/profile.svg';
import { useMutation } from 'react-query';
import { CommentType } from 'type/petition/petition.type';
import { DateSplit } from 'utills/DateSplit';
import * as S from './style';

const Comment = ({ comment, createdAt, id }: CommentType) => {
  const date = DateSplit(createdAt);

  const deleteMutate = useMutation(deleteCommentPetition, {
    onSuccess: () => {
      alert('삭제 성공');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const deleteSubmit = () => {
    // 임시 confirm
    if (window.confirm('정말 댓글을 삭제하시겠습니까?')) {
      deleteMutate.mutate(id);
    }
  };

  return (
    <S.Container>
      <S.Info>
        <S.InfoWrap>
          <S.ProfileWrap>
            <S.Profile src={ProfileSvg} />
            <S.ItemWrap>
              <S.Name>익명</S.Name>
              <S.Date>{`${date?.[0]} ${date?.[1]}`}</S.Date>
            </S.ItemWrap>
          </S.ProfileWrap>
          <S.Delete onClick={deleteSubmit}>삭제</S.Delete>
        </S.InfoWrap>
      </S.Info>
      <S.Comment>{comment}</S.Comment>
    </S.Container>
  );
};

export default Comment;
