import { useMutation } from 'react-query';
import { logoutUser } from 'apis/user.api';
import { useNavigate } from 'react-router-dom';

export const LogoutFeature = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation(logoutUser, {
    onSuccess: () => {
      localStorage.clear();
      window.location.href = '/';
      navigate('/');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const logout = () => {
    mutate();
  };

  return { logout };
};
