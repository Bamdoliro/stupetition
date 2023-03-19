import styled from 'styled-components';
import { color } from 'styles/theme.style';
import * as T from 'styles/text.style';

const NotFoundBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NotFoundText = styled(T.H3)`
  color: ${color.gray900};
  text-align: center;
`;

const NotFound = () => {
  return (
    <NotFoundBox>
      <NotFoundText>
        404 Error
        <br />
        2학년 2반 김석진한테 문의하세요
      </NotFoundText>
    </NotFoundBox>
  );
};

export default NotFound;
