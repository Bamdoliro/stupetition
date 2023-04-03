import { ChangeEvent, useState } from 'react';
import { WritePetitionType } from 'types/petition.type';
import MiniButton from 'components/common/MiniButton';
import { useModal } from 'hooks/useModal';
import { useNavigate } from 'react-router-dom';
import Modal from 'components/common/Modal';
import * as S from './style';
import CheckWriteModal from './CheckWriteModal';

const WritePetition = () => {
  const navigate = useNavigate();
  const { openModal, closeModal } = useModal();
  const [isOpenCheckPetitionModal, setIsOpenCheckPetitionModal] =
    useState(false);
  const [petitionData, setPetitionData] = useState<WritePetitionType>({
    title: '',
    content: '',
  });
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPetitionData({ ...petitionData, [name]: value });
  };

  const writeClose = () => {
    const close = () => closeModal();
    const confirm = () => {
      navigate('/');
      closeModal();
    };
    if (petitionData.content || petitionData.title) {
      openModal(
        <Modal
          option="CONFIRM"
          title="창 닫기"
          content={
            <p>
              이대로 나가면 변경사항이 모두 삭제됩니다
              <br />
              정말 이 페이지를 나가시겠습니까?
            </p>
          }
          closeText="취소"
          confirmText="나가기"
          handleClose={close}
          handleConfirm={confirm}
        />,
      );
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <S.WritePetitionLayout>
        <S.Header>
          <S.HeaderWrap>
            <MiniButton value="취소" option="UNFILLED" onClick={writeClose} />
            {petitionData.content.length >= 2 &&
            petitionData.title.length >= 2 ? (
              <MiniButton
                value="다음"
                option="FILLED"
                onClick={() => setIsOpenCheckPetitionModal(true)}
              />
            ) : (
              <MiniButton value="다음" option="SCARCE_FILLED" />
            )}
          </S.HeaderWrap>
        </S.Header>
        <S.ContentsWrap>
          <S.TitleInput
            onChange={onChange}
            name="title"
            placeholder="제목을 입력해 주세요."
            minLength={2}
            maxLength={20}
          />
          <S.ContentInput
            onChange={onChange}
            name="content"
            placeholder="청원 내용을 입력하세요."
          />
        </S.ContentsWrap>
      </S.WritePetitionLayout>
      <CheckWriteModal
        petitionData={petitionData}
        close={() => setIsOpenCheckPetitionModal(false)}
        isOpenCheckWriteModal={isOpenCheckPetitionModal}
      />
    </>
  );
};

export default WritePetition;