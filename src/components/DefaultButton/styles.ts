import styled from 'styled-components/native';
import { ButtonVariant, colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { radius } from '../../theme/radius';
import { typography } from '../../theme/typography';

export const ButtonContainer = styled.TouchableOpacity<{
  variant: ButtonVariant;
}>`
  background-color: ${({ variant }) => colors.buttonColor[variant]};
  border-radius: ${radius.sm}px;
`;

export const ButtonDescription = styled.Text<{
  variant: ButtonVariant;
}>`
  color: ${({ variant }) =>
    variant === 'secondary'
      ? colors.buttonColor.text.black
      : colors.buttonColor.text.white};
  text-align: center;

  width: 100%;
  font-size: ${typography.sizes.lg}px;
  font-weight: ${typography.weights.bold};
  padding-block: ${spacing.md};
`;
