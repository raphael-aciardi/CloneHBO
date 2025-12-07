import styled from 'styled-components/native';
import { colors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';

export const ScreenContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.background};
`;

export const Title = styled.Text`
  font-size: ${typography.sizes.xl}px;
  font-weight: ${typography.weights.bold};
  color: ${colors.text};
  margin-bottom: ${spacing.md}px;
  text-align: center;
`;
