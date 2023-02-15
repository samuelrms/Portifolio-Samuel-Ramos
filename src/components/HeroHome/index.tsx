import { Container, TextContainer } from './styles';
import { InfosContainer } from '../InfosContainer';

export const HeroHome = () => (
  <Container data-aos="fade-up">
    <img src="/samuel-rms.png" alt="Foto de Samuel Ramos" />
    <div>
      <TextContainer>
        <h1>Olá</h1>
        <h2>Me chamo Samuel</h2>
      </TextContainer>
      <InfosContainer />
    </div>
  </Container>
);
