import { createPetition } from 'api/petition';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { CreatePetitionType } from 'type/petition/petition.type';
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

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
          <S.UnfilledButton onClick={cancel}>
            <S.UnfilledButtonText>취소</S.UnfilledButtonText>
          </S.UnfilledButton>
          {petitionData.content.length <= 0 ||
          petitionData.title.length <= 0 ? (
            <S.ScarceFilledButton>
              <S.ScarceFilledButtonText>다음</S.ScarceFilledButtonText>
            </S.ScarceFilledButton>
          ) : (
            <S.FilledButton onClick={submit}>
              <S.FilledButtonText>다음</S.FilledButtonText>
            </S.FilledButton>
          )}
        </S.HeaderWrap>
      </S.Header>
      <S.ContentsWrap>
        <S.TitleInput
          onChange={onChange}
          name="title"
          placeholder="제목을 입력해 주세요."
          maxLength={40}
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
