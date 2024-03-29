import { useGoogleLoginMutation } from 'features/GoogleLoginFeature';
import Loading from 'components/common/Loading';
import queryString from 'query-string';
import { useEffect } from 'react';
import * as S from './style';

const Callback = () => {
  const googleLoginMutate = useGoogleLoginMutation();

  useEffect(() => {
    const q = queryString.parse(window.location.search);
    if (q.code !== undefined && typeof q.code === 'string') {
      googleLoginMutate.mutate(q.code);
    }
  }, []);

  return (
    <S.CallbackLayout>
      <Loading />
    </S.CallbackLayout>
  );
};

export default Callback;
