import ProfileSvg from 'assets/profile.svg';
import { FormatDatetime } from 'utils/FormatDatetime';
import CheckSvg from 'assets/check.svg';
import { AnswerType } from 'types/petition.type';
import { useModal } from 'hooks/useModal';
import Modal from 'components/common/Modal';
import { useDeleteAnswerMutation } from 'features/PetitionFeature';
import * as S from './style';

const Answer = ({ comment, createdAt, hasPermission, id }: AnswerType) => {
  const { openModal, closeModal } = useModal();
  const { date } = FormatDatetime(createdAt);

  const deleteAnswerMutate = useDeleteAnswerMutation(id);

  const checkDeleteAnswer = () => {
    openModal(
      <Modal
        title="댓글 삭제"
        content={<p>정말 댓글을 삭제 하시겠습니까?</p>}
        closeText="취소"
        confirmText="삭제"
        handleClose={closeModal}
        handleConfirm={() => deleteAnswerMutate.mutate()}
      />,
    );
  };

  return (
    <S.Answer>
      <S.Info>
        <S.InfoWrap>
          <S.ProfileWrap>
            <S.Profile src={ProfileSvg} />
            <S.ItemWrap>
              <S.NameWrap>
                <S.Name>학생회</S.Name>
                <S.Check src={CheckSvg} />
              </S.NameWrap>
              <S.Date>{date}</S.Date>
            </S.ItemWrap>
          </S.ProfileWrap>
          {hasPermission && (
            <S.Delete onClick={checkDeleteAnswer}>삭제</S.Delete>
          )}
        </S.InfoWrap>
      </S.Info>
      <S.Content>{comment}</S.Content>
    </S.Answer>
  );
};

export default Answer;
