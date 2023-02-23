import { color } from 'styles/theme.style';
import * as T from 'styles/text.style';
import styled from 'styled-components';

export const ProfilePopover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  position: absolute;
  right: 15px;
  top: 80px;
  width: 200px;
  height: 178px;
  padding: 24px 0px;
  border-radius: 8px;
  background-color: ${color.white};
`;

export const Button = styled.button`
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

export const ButtonText = styled(T.p3)`
  color: ${color.gray700};
`;

export const Line = styled.div`
  width: 160px;
  border: 1px solid ${color.gray300};
  margin: 8px 0px;
`;
