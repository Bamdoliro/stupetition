import { useState } from 'react';
import { CreatePetitionType } from 'type/petition/petition.type';
import { createPetition } from 'api/petition';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

const CreateBoard = () => {
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

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPetitionData({ ...petitionData, [name]: value });
  };

  const submit = () => {
    mutate(petitionData);
  };

  return (
    <S.Container>
      <S.Title>게시글 생성하기</S.Title>
      <S.Input
        onChange={onChange}
        name="title"
        placeholder="청원 제목을 입력하세요."
      />
      <S.Input
        onChange={onChange}
        name="content"
        placeholder="청원 내용을 입력하세요."
      />
      <S.Button onClick={submit}>청원 보내기</S.Button>
    </S.Container>
  );
};

export default CreateBoard;
