import { color } from 'styles/theme.style';
import styled from 'styled-components';
import { font } from 'styles/text.style';

export const ProfilePopover = styled.div<{ display: string }>`
  display: ${(props) => props.display};
  flex-direction: column;
  align-items: center;
  z-index: 1;
  position: absolute;
  right: 15px;
  top: 80px;
  width: 200px;
  height: 186px;
  padding: 24px 0px;
  border-radius: 8px;
  background-color: ${color.white};
`;

export const Button = styled.button`
  ${font.p3}
  color: ${color.gray700};
  text-align: left;
  width: 100%;
  height: 38px;
  padding: 8px 20px;
  background-color: ${color.white};
  cursor: pointer;
  &:hover {
    background-color: ${color.gray100};
  }
`;

export const Line = styled.div`
  width: 160px;
  border: 0.9px solid ${color.gray300};
  margin: 8px 0px;
`;
