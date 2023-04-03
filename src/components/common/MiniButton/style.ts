import { color } from 'styles/theme.style';
import * as T from 'styles/text.style';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { MiniButtonOptionType } from 'types/common/button.type';

export const MiniButton = styled.button<{ option: MiniButtonOptionType }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 10px 16px;
  ${({ option }) => option && getMiniButtonStyle[option]}
`;

export const MiniButtonText = styled(T.btn2)``;

const getMiniButtonStyle: Record<
  MiniButtonOptionType,
  FlattenSimpleInterpolation
> = {
  FILLED: css`
    color: ${color.white};
    background-color: ${color.main};
    &:hover {
      background-color: ${color.hover};
    }
  `,
  UNFILLED: css`
    color: ${color.gray600};
    background-color: ${color.white};
    border: 1px solid ${color.gray200};
    &:hover {
      border: 1px solid ${color.gray300};
      color: ${color.gray900};
    }
  `,
  SCARCE_FILLED: css`
    cursor: default;
    background-color: ${color.disabled};
    color: ${color.white};
  `,
};
