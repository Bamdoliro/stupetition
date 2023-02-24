import { writePetition } from 'apis/petition.api';
import { useConfirm } from 'hooks/useDialog';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { WritePetitionType } from 'types/petition.type';

export const WriteFeature = (petitionData: WritePetitionType) => {
  const navigate = useNavigate();
  const { openConfirm } = useConfirm();
  const { mutate } = useMutation(writePetition, {
    onSuccess: () => {
      alert('게시글 작성 성공 !!');
      navigate('/');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const write = () => {
    mutate(petitionData);
  };

  const cancel = () => {
    if (petitionData.content || petitionData.title) {
      openConfirm();
    } else {
      navigate('/');
    }
  };

  return { write, cancel };
};
