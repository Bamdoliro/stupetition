import { ACCESS_KEY, REFRESH_KEY } from 'constants/token.constant';
import { useEffect } from 'react';
import { Storage } from 'libs/storage/storage';
import { useNavigate } from 'react-router-dom';

const useTokenCheck = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (
      Storage.getItem(ACCESS_KEY) === null ||
      Storage.getItem(REFRESH_KEY) === null
    ) {
      navigate('/login');
    }
  }, [navigate]);
};

export default useTokenCheck;
