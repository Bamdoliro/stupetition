import ProfileSvg from 'assets/profile.svg';
import { FormatDatetime } from 'utils/FormatDatetime';
import CheckSvg from 'assets/check.svg';
import { CommentType } from 'types/petition.type';
import { ReplyDeleteFeature } from 'features/home/replyDelete.feature';
import { useModal } from 'hooks/useModal';
import Modal from 'components/common/Modal';
import * as S from './style';

const Comment = ({
  comment,
  createdAt,
  id,
  option,
  hasPermission,
}: CommentType) => {
  const { openModal, closeModal } = useModal();
  const { date, time } = FormatDatetime(createdAt);
  const { deleteSubmit } = ReplyDeleteFeature({ id, option });

  const deleteComment = () => {
    openModal(
      <Modal
        option="CONFIRM"
        title="청원 삭제"
        content={<p>정말 청원을 삭제 하시겠습니까?</p>}
        closeText="취소"
        confirmText="삭제"
        handleClose={closeModal}
        handleConfirm={deleteSubmit}
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
                  {option === 'STUDENT_COUNCIL' ? '학생회' : '학생'}
                </S.Name>
                {option === 'STUDENT_COUNCIL' && <S.Check src={CheckSvg} />}
              </S.NameWrap>
              <S.Date>
                {date} {time}
              </S.Date>
            </S.ItemWrap>
          </S.ProfileWrap>
          {hasPermission && <S.Delete onClick={deleteComment}>삭제</S.Delete>}
        </S.InfoWrap>
      </S.Info>
      <S.Content>
        <S.Pre>{comment}</S.Pre>
      </S.Content>
    </S.Comment>
  );
};

export default Comment;
