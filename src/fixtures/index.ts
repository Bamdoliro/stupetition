import { PetitionDetailType } from 'types/petition.type';

export const petitionDetail: PetitionDetailType = {
  answer: [],
  approved: false,
  comments: [],
  content: '',
  createdAt: '0000-00-00T00:00:00',
  status: 'ANSWERED',
  title: '',
  numberOfApprover: 0,
  percentageOfApprover: 0,
  id: 0,
  hasPermission: false,
  writer: {
    authority: 'ROLE_STUDENT',
    email: '',
    schoolName: '',
    status: 'ATTENDING',
    userId: 0,
  },
};
