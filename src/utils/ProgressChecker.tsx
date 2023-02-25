import { MyPetitionStatusType, StatusType } from 'types/petition.type';

export const ProgressChecker = (status: StatusType | MyPetitionStatusType) => {
  if (status === 'PETITION') return { color: '#66BB6A', progress: '진행' };
  if (status === 'ANSWERED') return { color: '#66BB6A', progress: '진행' };
  if (status === 'WAITING') return { color: '#66BB6A', progress: '진행' };
  return { color: '#66BB6A', progress: '진행' };
};
