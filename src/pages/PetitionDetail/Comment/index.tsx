import ProfileSvg from 'assets/profile.svg';
import { FormatDatetime } from 'utils/FormatDatetime';
import { CommentType } from 'types/petition.type';
import { useModal } from 'hooks/useModal';
import Modal from 'components/common/Confirm';
import { useDeleteCommentMutation } from 'features/PetitionFeature';
import { EmailReplace } from 'utils/EmailReplace';
import * as S from './style';

const Comment = ({
  comment,
  createdAt,
  id,
  hasPermission,
  writer,
}: CommentType) => {
  const { openModal, closeModal } = useModal();
  const { date } = FormatDatetime(createdAt);
  const { userEmail } = EmailReplace(writer.email);

  const deleteCommentMutate = useDeleteCommentMutation(id);

  const checkDeleteComment = () => {
    openModal(
      <Modal
        title="댓글 삭제"
        content={<p>정말 댓글을 삭제 하시겠습니까?</p>}
        closeText="취소"
        confirmText="삭제"
        handleClose={closeModal}
        handleConfirm={() => deleteCommentMutate.mutate()}
      />,
    );
  };

  return (
    <S.Comment>
      <S.Info>
        <S.InfoWrap>
          <S.ProfileWrap>
            <S.Profile src={ProfileSvg} />
            <S.ItemWrap>
              <S.NameWrap>
                <S.Name>
                  {writer.name} #{userEmail}
                </S.Name>
              </S.NameWrap>
              <S.Date>{date}</S.Date>
            </S.ItemWrap>
          </S.ProfileWrap>
          {hasPermission && (
            <S.Delete onClick={checkDeleteComment}>삭제</S.Delete>
          )}
        </S.InfoWrap>
      </S.Info>
      <S.Content>{comment}</S.Content>
    </S.Comment>
  );
};

export default Comment;
