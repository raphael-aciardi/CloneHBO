import { CatalogImage, Container } from './styles';

export default function MoviesCatalogImage() {
  return (
    <Container>
      <CatalogImage source={require('@images/movies-catalog.jpg')} />
    </Container>
  );
}
