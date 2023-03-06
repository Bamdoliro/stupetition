import { writePetition } from 'apis/petition.api';
import { useSuccesToast } from 'hooks/useToast';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { WritePetitionType } from 'types/petition.type';

export const WriteFeature = (petitionData: WritePetitionType) => {
  const navigate = useNavigate();
  const { mutate } = useMutation(writePetition, {
    onSuccess: () => {
      useSuccesToast('게시글 작성 성공 !!');
      navigate('/');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  // petitionWrite
  const write = () => {
    mutate(petitionData);
    // closeModal();
  };

  // confirm cancel
  const cancelConfirm = () => {
    if (petitionData.content || petitionData.title) {
      // openDialog();
    } else {
      navigate('/');
    }
  };

  return {
    write,
    cancelConfirm,
  };
};
