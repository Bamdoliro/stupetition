import { writePetition } from 'api/petition.api';
import { useModal } from 'hooks/useModal';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { WritePetitionType } from 'types/petition.type';

export const useWritePetition = (petitionData: WritePetitionType) => {
  const navigate = useNavigate();
  const { closeModal } = useModal();

  return useMutation(() => writePetition(petitionData), {
    onSuccess: () => {
      toast.success('작성 성공');
      closeModal();
      navigate('/main');
    },
  });
};
