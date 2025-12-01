import styled from 'styled-components/native';
import { colors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';

export const ScreenContainer = styled.View`
  flex: 1;
  background-color: ${colors.background};
  padding: ${spacing.md}px;
`;

export const Title = styled.Text`
  font-size: ${typography.sizes.xl}px;
  font-weight: bold;
  color: ${colors.text};
`;

export const Subtitle = styled.Text`
  font-size: ${typography.sizes.md}px;
  color: ${colors.textSecondary};
`;
