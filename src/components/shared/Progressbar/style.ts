import * as T from 'styles/text';
import { color } from 'styles/theme';
import styled from 'styled-components';

export const ProgressBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PercentSmall = styled(T.H5)`
  color: ${color.gray600};
`;

export const PersonnelSmall = styled(T.caption)`
  color: ${color.gray600};
`;

export const PercentLarge = styled(T.H2)`
  color: ${color.gray600};
`;

export const PersonnelLarge = styled(T.p1)`
  color: ${color.gray600};
`;
