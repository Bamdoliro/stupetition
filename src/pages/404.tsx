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

const NotFoundText = styled(T.D1)`
  color: ${color.gray900};
  text-align: center;
`;

const NotFound = () => {
  return (
    <NotFoundBox>
      <NotFoundText>
        404 Error
        <br />
        개발자한테 문의하세요 !
      </NotFoundText>
    </NotFoundBox>
  );
};

export default NotFound;
