import { getPetitionDetail } from 'apis/petition.api';
import { useQuery } from 'react-query';
import { CommentType, StatusType, Writer } from 'types/petition.type';

interface GetPetitionDetailType {
  comments: CommentType[];
  content: string;
  id: number;
  numberOfApprover: number;
  status: StatusType;
  answer: string;
  title: string;
  userEmail: string;
  createdAt: string;
  approved: boolean;
  writer: Writer;
}

export const DetailFeature = (detailId: number) => {
  const { isLoading, isError, data } = useQuery<GetPetitionDetailType>(
    ['detailDatas', detailId],
    () => getPetitionDetail(detailId),
  );

  return { isLoading, isError, data };
};
