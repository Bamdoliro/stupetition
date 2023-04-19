import styled from 'styled-components';
import { font } from 'styles/text.style';
import { color } from 'styles/theme.style';

const NotFoundText = styled.p`
  ${font.H1}
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
