import { deleteUser } from 'apis/user.api';
import { useSuccesToast } from 'hooks/useToast';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

export const DeleteUserFeature = (password: string) => {
  const navigate = useNavigate();

  const { mutate } = useMutation(deleteUser, {
    onSuccess: () => {
      useSuccesToast('계정 삭제 성공');
      navigate('/login');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const deleteUserSubmit = () => {
    mutate(password);
  };

  return { deleteUserSubmit };
};
