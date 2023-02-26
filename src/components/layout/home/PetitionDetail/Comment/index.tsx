import ProfileSvg from 'assets/profile.svg';
import { FormatDatetime } from 'utils/FormatDatetime';
import CheckSvg from 'assets/check.svg';
import { useRecoilValue } from 'recoil';
import { userState } from 'atoms/user.atom';
import { CommentType } from 'types/petition.type';
import Dialog from 'components/common/Dialog';
import { useDialog } from 'hooks/useDialog';
import { CommentDeleteFeature } from 'features/home/commentDelete.feature';
import * as S from './style';

const Comment = ({ comment, createdAt, id, writer, option }: CommentType) => {
  const { date, time } = FormatDatetime(createdAt);
  const { closeDialog, openDialog } = useDialog();
  const userData = useRecoilValue(userState);
  const { deleteSubmit } = CommentDeleteFeature(id);

  console.log(writer, userData.email);
  return (
    <>
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
              <S.Delete onClick={openDialog}>삭제</S.Delete>
            )}
          </S.InfoWrap>
        </S.Info>
        <S.Content>
          <S.Pre>{comment}</S.Pre>
        </S.Content>
      </S.Comment>
      <Dialog
        option="CONFIRM"
        title="댓글 삭제"
        content="정말 댓글을 삭제하시겠습니까?"
        canceltext="취소"
        checktext="삭제"
        cancel={closeDialog}
        check={() => {
          deleteSubmit();
          closeDialog();
        }}
      />
    </>
  );
};

export default Comment;
