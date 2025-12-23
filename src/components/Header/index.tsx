import { useNavigation } from '@react-navigation/native';
import { ButtonRedirect, ChevronLeftIcon, Container } from './styles';

export default function Header() {
  const navigation = useNavigation();
  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <Container>
      <ButtonRedirect onPress={handleGoBack}>
        <ChevronLeftIcon />
      </ButtonRedirect>
    </Container>
  );
}
