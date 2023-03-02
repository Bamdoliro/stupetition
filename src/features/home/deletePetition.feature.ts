import { deletePetition } from 'apis/petition.api';
import { useSuccesToast } from 'hooks/useToast';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

const DeletePetitionFeature = (petitionId: number) => {
  const navigate = useNavigate();

  const deleteMutate = useMutation(deletePetition, {
    onSuccess: () => {
      useSuccesToast('삭제 완료');
      navigate('/');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const deleteSubmit = () => {
    deleteMutate.mutate(petitionId);
  };

  return { deleteSubmit };
};

export default DeletePetitionFeature;
