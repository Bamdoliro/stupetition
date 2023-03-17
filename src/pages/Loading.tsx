import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';
import { color } from 'styles/theme.style';

const SpinnerBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Loading = () => {
  return (
    <SpinnerBox>
      <ClipLoader color={color.main} />
    </SpinnerBox>
  );
};

export default Loading;
