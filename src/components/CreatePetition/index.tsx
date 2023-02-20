import { createPetition } from 'api/petition';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { CreatePetitionType } from 'types/petition/petition.type';
import MiniButton from 'components/Common/MiniButton';
import * as S from './style';

const CreatePetition = () => {
  const navigate = useNavigate();
  const [petitionData, setPetitionData] = useState<CreatePetitionType>({
    title: '',
    content: '',
  });

  const { mutate } = useMutation(createPetition, {
    onSuccess: () => {
      alert('게시글 작성 성공 !!');
      navigate('/');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setPetitionData({ ...petitionData, [name]: value });
  };

  const submit = () => {
    mutate(petitionData);
  };

  const cancel = () => {
    // 임시 confirm
    if (petitionData.content || petitionData.title) {
      if (
        window.confirm('변경된 사항은 저장되지 않습니다 진짜 나갈거냐 닝겐')
      ) {
        navigate('/');
      }
    } else {
      navigate('/');
    }
  };

  return (
    <S.Container>
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
    </S.Container>
  );
};

export default CreatePetition;
