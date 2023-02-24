import { ChangeEvent, useState } from 'react';
import { WritePetitionType } from 'types/petition.type';
import MiniButton from 'components/common/MiniButton';
import { WriteFeature } from 'features/home/write.feature';
import Confirm from 'components/common/Dialog';

import { useNavigate } from 'react-router-dom';
import { useDialog } from 'hooks/useDialog';
import * as S from './style';
import CheckPetitionModal from './CheckPetitionModal';

const WritePetition = () => {
  const navigate = useNavigate();
  const { closeDialog, openDialog } = useDialog();
  const [petitionData, setPetitionData] = useState<WritePetitionType>({
    title: '',
    content: '',
  });
  const {
    write,
    closeCheckPetition,
    openCheckPetition,
    cancelConfirm,
    closeConfirm,
    outConfirm,
  } = WriteFeature(petitionData);

  const onChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setPetitionData({ ...petitionData, [name]: value });
  };

  return (
    <>
      <S.WritePetitionLayout>
        <S.Header>
          <S.HeaderWrap>
            <MiniButton
              value="취소"
              option="UNFILLED"
              onClick={cancelConfirm}
            />
            {petitionData.content.length <= 0 ||
            petitionData.title.length <= 0 ? (
              <MiniButton value="다음" option="SCARCE_FILLED" />
            ) : (
              <MiniButton
                value="다음"
                option="FILLED"
                onClick={() => openCheckPetition()}
              />
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
      <Confirm
        option="CONFIRM"
        title="창 닫기"
        content="이대로 나가면 변경사항이 모두 삭제됩니다.
        정말 이 페이지를 나가시겠습니까?"
        canceltext="취소"
        checktext="나가기"
        cancel={closeConfirm}
        check={outConfirm}
      />
      <CheckPetitionModal
        title={petitionData.title}
        close={closeCheckPetition}
        write={write}
      />
    </>
  );
};

export default WritePetition;
