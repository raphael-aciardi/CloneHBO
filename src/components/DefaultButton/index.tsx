import { ButtonContainer, ButtonDescription } from './styles';
import { ButtonProps } from './types';

export default function DefaultButton({
  buttonStyle = 'primary',
  title,
}: ButtonProps) {
  return (
    <ButtonContainer variant={buttonStyle}>
      <ButtonDescription variant={buttonStyle}>{title}</ButtonDescription>
    </ButtonContainer>
  );
}
