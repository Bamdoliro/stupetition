import { writePetition } from 'apis/petition.api';
import { useModal } from 'hooks/useModal';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { WritePetitionType } from 'types/petition.type';

export const WriteFeature = (petitionData: WritePetitionType) => {
  const navigate = useNavigate();
  const { closeModal } = useModal();
  const { mutate } = useMutation(writePetition, {
    onSuccess: () => {
      toast.success('작성 성공');
      navigate('/');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const write = () => {
    mutate(petitionData);
    closeModal();
  };

  return { write };
};
