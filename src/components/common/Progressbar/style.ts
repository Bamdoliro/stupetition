import * as T from 'styles/text';
import { color } from 'styles/theme';
import styled from 'styled-components';

export const ProgressBarWrap = styled.div`
  width: 96px;
  height: 96px;
`;

export const Percent = styled(T.H5)`
  color: ${color.gray600};
`;

export const Personnel = styled(T.caption)`
  color: ${color.gray600};
`;
