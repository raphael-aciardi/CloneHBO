import styled from 'styled-components/native';
import { colors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ScreenContainerProps {
  paddingLeft?: number;
  paddingRight?: number;
}

export const ScreenContainer = styled(SafeAreaView)<ScreenContainerProps>`
  flex: 1;
  background-color: ${colors.background};

  padding-left: ${({ paddingLeft }) =>
    paddingLeft !== undefined ? `${paddingLeft}px` : 0};

  padding-right: ${({ paddingRight }) =>
    paddingRight !== undefined ? `${paddingRight}px` : 0};
`;

export const Title = styled.Text`
  font-size: ${typography.sizes.xl}px;
  font-weight: ${typography.weights.bold};
  color: ${colors.text};
  margin-bottom: ${spacing.md}px;
  text-align: center;
`;

export const Description = styled.Text`
  font-weight: ${typography.weights.regular};
  color: ${colors.text};
  margin-bottom: ${spacing.md}px;
  font-size: ${typography.sizes.md}px;
  text-align: center;
  width: 100%;
`;
