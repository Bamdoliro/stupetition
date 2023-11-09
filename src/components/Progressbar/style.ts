import { color } from 'styles/theme.style';
import styled from 'styled-components';
import { font } from 'styles/text.style';

export const ProgressBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PercentSmall = styled.p`
  ${font.H5}
  color: ${color.gray600};
`;

export const PersonnelSmall = styled.p`
  ${font.caption}
  color: ${color.gray600};
`;

export const PercentLarge = styled.p`
  ${font.H2}
  color: ${color.gray600};
`;

export const PersonnelLarge = styled.p`
  ${font.p1}
  color: ${color.gray600};
`;
