import styled from 'styled-components';
import { color } from 'styles/theme.style';
import * as T from 'styles/text.style';

const NotFoundText = styled(T.H1)`
  color: ${color.gray900};
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const NotFound = () => {
  return (
    <NotFoundText>
      404 Error
      <br />
      2학년 2반 김석진에게 문의하세요.
    </NotFoundText>
  );
};

export default NotFound;
