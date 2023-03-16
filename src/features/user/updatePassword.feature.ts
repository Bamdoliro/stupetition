import { updatePassword } from 'apis/user.api';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UpdatePasswordType } from 'types/user.type';

export const UpdatePasswordFeature = (
  updatePasswordData: UpdatePasswordType,
) => {
  const navigate = useNavigate();
  const { mutate } = useMutation(updatePassword, {
    onSuccess: () => {
      toast.success('비밀번호 변경 성공');
      navigate('/login');
    },
    onError: (err) => {
      console.log(err);
      toast.error('비밀번호 변경중 오류 발생');
    },
  });

  const submit = () => {
    const { currentPassword, password, rePassword } = updatePasswordData;

    if (password === rePassword) {
      mutate({
        currentPassword,
        password,
      });
    } else {
      toast.error('비밀번호가 다릅니다');
    }
  };

  return { submit };
};
