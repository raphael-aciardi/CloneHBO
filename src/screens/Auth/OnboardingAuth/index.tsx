import { Text, TouchableOpacity } from 'react-native';
import DefaultButton from '../../../components/DefaultButton';
import MoviesCatalogImage from '../../../components/MoviesCatalogImage';
import { ScreenContainer, Title } from '../../../theme/globalStyles';
import {
  ButtonsContainer,
  Container,
  Description,
  InformationsContainer,
  LinkButton,
  LinkButtonText,
  Logo,
  LogoContainer,
} from './styles';

export default function OnboardingAuth() {
  return (
    <ScreenContainer>
      <MoviesCatalogImage />

      <InformationsContainer>
        <LogoContainer>
          <Logo source={require('../../../assets/images/logo.png')} />
        </LogoContainer>
        <Title>Iniciar o streaming agora</Title>
        <Description>
          Prepare-se para curtir as melhores histórias da TV e do cinema
        </Description>
        <ButtonsContainer>
          <DefaultButton buttonStyle="secondary" title="Assinar agora" />
          <DefaultButton title="Entrar" />
          <LinkButton>
            <LinkButtonText>Privacidade e informações legais</LinkButtonText>
          </LinkButton>
        </ButtonsContainer>
      </InformationsContainer>
    </ScreenContainer>
  );
}
