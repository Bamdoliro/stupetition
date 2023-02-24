import { ChangeEvent, useState } from 'react';
import { WritePetitionType } from 'types/petition.type';
import MiniButton from 'components/common/MiniButton';
import { WriteFeature } from 'features/home/write.feature';
import * as S from './style';

const WritePetition = () => {
  const [petitionData, setPetitionData] = useState<WritePetitionType>({
    title: '',
    content: '',
  });
  const { write, cancel } = WriteFeature(petitionData);

  const onChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setPetitionData({ ...petitionData, [name]: value });
  };

  return (
    <S.WritePetitionLayout>
      <S.Header>
        <S.HeaderWrap>
          <MiniButton value="취소" option="UNFILLED" onClick={cancel} />
          {petitionData.content.length <= 0 ||
          petitionData.title.length <= 0 ? (
            <MiniButton value="다음" option="SCARCE_FILLED" />
          ) : (
            <MiniButton value="다음" option="FILLED" onClick={write} />
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
  );
};

export default WritePetition;
