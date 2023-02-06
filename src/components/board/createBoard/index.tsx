import { useState } from 'react';
import { CreateBoardType } from 'type/board/board.type';
import { createBoard } from 'api/board';
import { useMutation } from 'react-query';
import * as S from './style';

const CreateBoard = () => {
  const [boardData, setBoardData] = useState<CreateBoardType>({
    title: '',
    content: '',
  });

  const { mutate } = useMutation(createBoard, {
    onSuccess: () => {
      alert('게시글 작성 성공 !!');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBoardData({ ...boardData, [name]: value });
  };

  const submit = () => {
    mutate(boardData);
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
