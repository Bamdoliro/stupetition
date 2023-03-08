import SpinnerGif from 'assets/spinner.gif';
import styled from 'styled-components';
import { color } from 'styles/theme.style';

const SpinnerBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Spinner = styled.img`
  width: 60px;
`;

const Loading = () => {
  return (
    <SpinnerBox>
      <Spinner src={SpinnerGif} />
    </SpinnerBox>
  );
};

export default Loading;
