import { useState } from 'react';
import { WritePetitionType } from 'types/petition/petition.type';
import MiniButton from 'components/shared/MiniButton';
import { WriteFeature } from 'features/home/petition/write/write.feature';
import * as S from './style';

const WritePetition = () => {
  const [petitionData, setPetitionData] = useState<WritePetitionType>({
    title: '',
    content: '',
  });
  const { submit, cancel } = WriteFeature(petitionData);

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setPetitionData({ ...petitionData, [name]: value });
  };

  return (
    <S.WritePetitionLayout>
      <S.Header>
        <S.HeaderWrap>
          <MiniButton
            value="취소"
            option="UNFILLED"
            padding="10px 16px"
            onClick={cancel}
          />
          {petitionData.content.length <= 0 ||
          petitionData.title.length <= 0 ? (
            <MiniButton
              value="다음"
              option="SCARCE_FILLED"
              padding="10px 16px"
            />
          ) : (
            <MiniButton
              value="다음"
              option="FILLED"
              padding="10px 16px"
              onClick={submit}
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
  );
};

export default WritePetition;