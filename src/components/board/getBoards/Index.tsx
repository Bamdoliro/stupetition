import { useQuery } from 'react-query';
import { getBoard } from 'api/board';
import { GetBoardType } from 'type/board/board.type';
import { useState } from 'react';
import * as S from './style';

const GetBoards = () => {
  const [status, setStatus] = useState('PETITION');

  const { isLoading, isError, data } = useQuery<GetBoardType[]>(
    ['status', status],
    () => getBoard(status),
  );

  if (isLoading) {
    return <S.Container>기다려</S.Container>;
  }
  if (isError) {
    return <S.Container>에러다</S.Container>;
  }
  return (
    <S.Container>
      <S.TabBar>
        <S.TabBtn onClick={() => setStatus('PETITION')}>PETITION</S.TabBtn>
        <S.TabBtn onClick={() => setStatus('EXPIRED')}>EXPIRED</S.TabBtn>
        <S.TabBtn onClick={() => setStatus('WAITING')}>WAITING</S.TabBtn>
        <S.TabBtn onClick={() => setStatus('ANSWERED')}>ANSWERED</S.TabBtn>
      </S.TabBar>
      {status}
      {data?.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </S.Container>
  );
};

export default GetBoards;
