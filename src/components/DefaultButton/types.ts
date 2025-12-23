import { ButtonVariant } from '../../theme/colors';

export type ButtonProps = {
  buttonStyle?: ButtonVariant;
  title: string;
  onClick?: () => void;
};
