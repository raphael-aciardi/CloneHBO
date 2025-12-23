import styled from 'styled-components/native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

export const InputStyle = styled.TextInput.attrs({
  placeholderTextColor: colors.textSecondary,
})<{ isFocused: boolean }>`
  color: ${colors.text};
  border-width: 2px;
  border-radius: 3px;
  padding: ${spacing.md}px;
  border-color: ${({ isFocused }) =>
    isFocused ? colors.accent : colors.textInput.border};
`;

export const InputStyleContainer = styled.View`
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm}px;
`;

export const Label = styled.Text`
  color: ${colors.text};
  font-size: ${typography.sizes.md}px;
  font-weight: ${typography.weights.bold};
`;
