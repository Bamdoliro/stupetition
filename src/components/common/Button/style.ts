import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { font } from 'styles/text.style';
import { color } from 'styles/theme.style';
import { ButtonOptionType } from 'types/common/button.type';

export const Button = styled.button<{ option: ButtonOptionType }>`
  ${font.H5}
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 22px;
  border-radius: 8px;
  ${({ option }) => option && getButtonStyle[option]}
`;

export const Img = styled.img``;

const getButtonStyle: Record<ButtonOptionType, FlattenSimpleInterpolation> = {
  FILLED: css`
    color: ${color.white};
    background-color: ${color.main};
    &:hover {
      background-color: ${color.hover};
    }
  `,
  UNFILLED: css`
    color: ${color.gray600};
    border: 1px solid ${color.gray200};
    &:hover {
      border: 1px solid ${color.gray300};
      color: ${color.gray900};
    }
  `,
};
