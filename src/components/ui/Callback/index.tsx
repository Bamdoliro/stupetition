import { GoogleAuth } from 'features/auth/googleAuth.feature';
import Loading from 'pages/Loading';
import * as S from './style';

const Callback = () => {
  GoogleAuth();
  return (
    <S.CallbackLayout>
      <Loading />
    </S.CallbackLayout>
  );
};

export default Callback;
