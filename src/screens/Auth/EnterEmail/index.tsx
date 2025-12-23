import DefaultButton from '../../../components/DefaultButton';
import Header from '../../../components/Header';
import InputLabel from '../../../components/InputLabel';
import {
  Description,
  ScreenContainer,
  Title,
} from '../../../theme/globalStyles';
import {
  CreateAccountLink,
  CreateAccountText,
  HelperLink,
  HelperText,
  InputContainer,
  RegisterContainer,
  RegisterText,
  SquareArrowOutUpRightIcon,
} from './styles';

export default function EnterEmail() {
  function handleCreateAccount() {}

  return (
    <ScreenContainer paddingLeft={24} paddingRight={24}>
      <Header />
      <Title>Entrar</Title>
      <Description>Digite seu endereço de e-mail para continuar.</Description>

      <InputContainer>
        <InputLabel />
        <DefaultButton title="Continuar" buttonStyle="secondary" />
      </InputContainer>
      <RegisterContainer>
        <RegisterText>Ainda não tem uma conta no PRIME?</RegisterText>
        <CreateAccountLink>
          Se você acessa o PRIME através de um provedor de TV, celular ou
          internet,{' '}
          <CreateAccountText onPress={() => handleCreateAccount}>
            crie uma conta PRIME
          </CreateAccountText>
          .
        </CreateAccountLink>

        <HelperLink onPress={() => {}}>
          <HelperText>Precisa de ajuda para entrar?</HelperText>
          <SquareArrowOutUpRightIcon size={16} />
        </HelperLink>
      </RegisterContainer>
    </ScreenContainer>
  );
}
