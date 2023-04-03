import { deletePetition } from 'apis/petition.api';
import { useMutation, useQueryClient } from 'react-query';
import * as KEY from 'constants/key.constant';
import { useNavigate } from 'react-router-dom';
import { useModal } from 'hooks/useModal';
import { toast } from 'react-toastify';

const DeletePetitionFeature = (petitionId: number) => {
  const navigate = useNavigate();
  const { closeModal } = useModal();
  const queryClient = useQueryClient();

  const deleteMutate = useMutation(deletePetition, {
    onSuccess: () => {
      toast.success('삭제 완료');
      queryClient.invalidateQueries([KEY.PETITION_LIST]);
      navigate('/');
    },
  });

  const deleteSubmit = () => {
    deleteMutate.mutate(petitionId);
    closeModal();
  };

  return { deleteSubmit };
};

export default DeletePetitionFeature;
