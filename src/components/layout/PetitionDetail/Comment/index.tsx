import { deleteCommentPetition } from 'apis/petition.api';
import ProfileSvg from 'assets/profile.svg';
import { useMutation } from 'react-query';
import { CommentType } from 'types/petition/petition.type';
import { FormatDatetime } from 'utils/FormatDatetime';
import CheckSvg from 'assets/check.svg';
import * as S from './style';

const Comment = ({ comment, createdAt, id }: CommentType) => {
  const { date, time } = FormatDatetime(createdAt);

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
    <S.Comment>
      <S.Info>
        <S.InfoWrap>
          <S.ProfileWrap>
            <S.Profile src={ProfileSvg} />
            <S.ItemWrap>
              <S.NameWrap>
                <S.Name>익명</S.Name>

                {/* 백 고치면 그때 해야함 */}
                {/* {user.authority === 'ROLE_STUDENT_COUNCIL' ? (
                  <S.Check src={CheckSvg} />
                ) : (
                  ''
                )} */}
              </S.NameWrap>
              <S.Date>
                {date} {time}
              </S.Date>
            </S.ItemWrap>
          </S.ProfileWrap>
          <S.Delete onClick={deleteSubmit}>삭제</S.Delete>
        </S.InfoWrap>
      </S.Info>
      <S.Content>
        <S.Pre>{comment}</S.Pre>
      </S.Content>
    </S.Comment>
  );
};

export default Comment;