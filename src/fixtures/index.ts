import { PetitionDetailType } from 'types/petition.type';
import { UserInfoType } from 'types/user.type';

export const petitionDetailData: PetitionDetailType = {
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
    name: '학생',
    authority: 'ROLE_STUDENT',
    email: '',
    schoolName: '',
    status: 'ATTENDING',
    userId: 0,
  },
};

export const userEmpty: UserInfoType = {
  authority: '',
  email: '',
  schoolName: '',
  name: '',
};
