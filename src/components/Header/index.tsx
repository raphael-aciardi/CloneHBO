import { ButtonRedirect, ChevronLeftIcon, Container } from './styles';

export default function Header() {
  return (
    <Container>
      <ButtonRedirect onPress={() => {}}>
        <ChevronLeftIcon />
      </ButtonRedirect>
    </Container>
  );
}
