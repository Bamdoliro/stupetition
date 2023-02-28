import SpinnerGif from 'assets/spinner.gif';
import styled from 'styled-components';
import { color } from 'styles/theme.style';

const SpinnerBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.img`
  background-color: ${color.white};
  width: 40px;
`;

const Loading = () => {
  return (
    <SpinnerBox>
      <Spinner src={SpinnerGif} />
    </SpinnerBox>
  );
};

export default Loading;
