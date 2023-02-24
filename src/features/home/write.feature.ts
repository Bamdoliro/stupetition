import { writePetition } from 'apis/petition.api';
import { useDialog } from 'hooks/useDialog';
import { useModal } from 'hooks/useModal';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { WritePetitionType } from 'types/petition.type';

export const WriteFeature = (petitionData: WritePetitionType) => {
  const navigate = useNavigate();
  const { openDialog, closeDialog } = useDialog();
  const { openModal, closeModal } = useModal();
  const { mutate } = useMutation(writePetition, {
    onSuccess: () => {
      alert('게시글 작성 성공 !!');
      navigate('/');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  // check petition {close, write}
  const closeCheckPetition = () => {
    closeModal();
  };

  const openCheckPetition = () => {
    openModal();
  };

  const write = () => {
    mutate(petitionData);
  };

  // confirm cancel
  const cancelConfirm = () => {
    if (petitionData.content || petitionData.title) {
      openDialog();
    } else {
      navigate('/');
    }
  };

  const closeConfirm = () => {
    closeDialog();
  };

  const outConfirm = () => {
    navigate('/');
    closeDialog();
  };

  return {
    closeCheckPetition,
    openCheckPetition,
    write,
    cancelConfirm,
    closeConfirm,
    outConfirm,
  };
};
