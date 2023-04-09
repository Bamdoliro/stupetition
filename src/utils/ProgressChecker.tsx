import { StatusType } from 'types/petition.type';

export const ProgressChecker = (status: StatusType) => {
  if (status === 'PETITION') return { color: '#66BB6A', progress: '진행' };
  if (status === 'ANSWERED') return { color: '#2979FF', progress: '완료' };
  if (status === 'WAITING') return { color: '#FFA000', progress: '대기' };
  if (status === 'EXPIRED') return { color: '#F44336', progress: '만료' };
  return { color: '#66BB6A', progress: '진행' };
};
