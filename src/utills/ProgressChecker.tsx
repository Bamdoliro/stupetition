import { StatusType } from 'type/board/board.type';

export const ProgressChecker = (status: StatusType) => {
  let progress = {
    color: '',
    progress: '',
  };
  if (status === 'PETITION') {
    progress = { color: '#66BB6A', progress: '진행' };
  }
  if (status === 'ANSWERED') {
    progress = { color: '#5073F1', progress: '완료' };
  }
  if (status === 'WAITING') {
    progress = { color: '#FFA000', progress: '대기' };
  }
  return progress;
};
