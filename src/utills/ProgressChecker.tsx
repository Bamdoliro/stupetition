import { StatusType } from 'type/petition/petition.type';

export const ProgressChecker = (status: StatusType | undefined) => {
  let progress = {
    color: '',
    progress: '',
  };
  if (status === 'PETITION') {
    progress = { color: '#66BB6A', progress: '진행' };
  } else if (status === 'ANSWERED') {
    progress = { color: '#5073F1', progress: '완료' };
  } else if (status === 'WAITING') {
    progress = { color: '#FFA000', progress: '대기' };
  } else if (status === 'EXPIRED') {
    progress = { color: '#F44336', progress: '만료' };
  }
  return progress;
};
