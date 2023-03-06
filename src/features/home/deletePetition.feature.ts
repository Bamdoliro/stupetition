import { deletePetition } from 'apis/petition.api';
import { useSuccesToast } from 'hooks/useToast';
import { useMutation, useQueryClient } from 'react-query';
import * as KEY from 'constants/key.constant';
import { useNavigate } from 'react-router-dom';
import { useModal } from 'hooks/useModal';

const DeletePetitionFeature = (petitionId: number) => {
  const navigate = useNavigate();
  const { closeModal } = useModal();
  const queryClient = useQueryClient();

  const deleteMutate = useMutation(deletePetition, {
    onSuccess: () => {
      useSuccesToast('삭제 완료');
      navigate('/');
      queryClient.invalidateQueries([KEY.PETITION_LIST]);

      navigate('/');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const deleteSubmit = () => {
    deleteMutate.mutate(petitionId);
    closeModal();
  };

  return { deleteSubmit };
};

export default DeletePetitionFeature;
