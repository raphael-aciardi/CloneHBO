import styled from 'styled-components/native';
import { colors } from '../../../theme/colors';
import { typography } from '../../../theme/typography';
import { spacing } from '../../../theme/spacing';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  background-color: ${colors.background};
`;

export const LogoContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding-bottom: ${spacing.md}px;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 50px;
`;

export const InformationsContainer = styled.View`
  flex: 1;
  padding: ${spacing.md}px;
  width: 100%;
`;

export const ButtonsContainer = styled.View`
  flex: 1;
  margin-top: ${spacing.md}px;
  gap: ${spacing.md}px;
`;

export const LinkButton = styled.TouchableOpacity`
  margin-top: ${spacing.md}px;
  align-items: center;
`;

export const LinkButtonText = styled.Text`
  font-weight: ${typography.weights.medium};
  color: ${colors.accent};
  font-size: ${typography.sizes.md}px;
  text-align: center;
`;
