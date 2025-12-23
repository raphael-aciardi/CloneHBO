import styled from 'styled-components/native';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { typography } from '../../../theme/typography';
import { SquareArrowOutUpRight } from 'lucide-react-native';

export const InputStyle = styled.TextInput.attrs({
  placeholderTextColor: colors.textSecondary,
})<{ isFocused: boolean }>`
  width: 100%;
  color: ${colors.text};
  border-width: 1px;
  border-color: ${({ isFocused }) =>
    isFocused ? colors.accent : colors.textInput.border};
`;

export const InputStyleContainer = styled.View`
  flex: 1;
`;

export const RegisterContainer = styled.View`
  flex: 1;
  gap: ${spacing.sm}px;
`;

export const InputContainer = styled.View`
  flex-direction: column;
  gap: ${spacing.xl}px;
  margin-bottom: ${spacing.xl}px;
`;

export const RegisterText = styled.Text`
  color: ${colors.text};
  font-size: ${typography.sizes.md}px;
  font-weight: ${typography.weights.black};
`;

export const CreateAccountButton = styled.Text`
  color: ${colors.accent};
`;

export const CreateAccountLink = styled.Text`
  color: ${colors.text};
`;

export const CreateAccountText = styled.Text`
  color: ${colors.accent};
  text-decoration: underline;
`;

export const HelperLink = styled.Pressable`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${spacing.xs}px;
  margin-top: ${spacing.xl}px;
`;

export const HelperText = styled.Text`
  color: ${colors.accent};
  font-size: ${typography.sizes.md}px;
  font-weight: ${typography.weights.black};
`;

export const SquareArrowOutUpRightIcon = styled(SquareArrowOutUpRight).attrs({
  color: colors.accent,
})``;
