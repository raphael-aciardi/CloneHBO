import { ButtonContainer, ButtonDescription } from './styles';
import { ButtonProps } from './types';

export default function DefaultButton({
  buttonStyle = 'primary',
  title,
  onClick,
}: ButtonProps) {
  return (
    <ButtonContainer variant={buttonStyle} onPress={onClick}>
      <ButtonDescription variant={buttonStyle}>{title}</ButtonDescription>
    </ButtonContainer>
  );
}
