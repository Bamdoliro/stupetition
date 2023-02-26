import { deleteCommentPetition } from 'apis/petition.api';
import ProfileSvg from 'assets/profile.svg';
import { useMutation } from 'react-query';
import { FormatDatetime } from 'utils/FormatDatetime';
import CheckSvg from 'assets/check.svg';
import { useRecoilValue } from 'recoil';
import { userState } from 'atoms/user.atom';
import { CommentType } from 'types/petition.type';
import { CommentDeleteFeature } from 'features/home/commentDelete.feature';
import * as S from './style';

const Comment = ({ comment, createdAt, id, writer, option }: CommentType) => {
  const { date, time } = FormatDatetime(createdAt);
  const userData = useRecoilValue(userState);
  const { deleteSubmit } = CommentDeleteFeature(id);

  return (
    <S.Comment>
      <S.Info>
        <S.InfoWrap>
          <S.ProfileWrap>
            <S.Profile src={ProfileSvg} />
            <S.ItemWrap>
              <S.NameWrap>
                <S.Name>
                  {option === 'STUDENT_COUNCIL' ? '학생회' : '학생'}
                </S.Name>
                {option === 'STUDENT_COUNCIL' && <S.Check src={CheckSvg} />}
              </S.NameWrap>
              <S.Date>
                {date} {time}
              </S.Date>
            </S.ItemWrap>
          </S.ProfileWrap>
          {userData.email === writer?.email && (
            <S.Delete onClick={deleteSubmit}>삭제</S.Delete>
          )}
        </S.InfoWrap>
      </S.Info>
      <S.Content>
        <S.Pre>{comment}</S.Pre>
      </S.Content>
    </S.Comment>
  );
};

export default Comment;
