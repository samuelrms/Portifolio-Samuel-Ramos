import { Container, TextContainer } from './styles';
import picture from '../../assets/samuel-rms.png';
import { InfosContainer } from '../InfosContainer';

export const HeroHome = () => (
  <Container>
    <img src={picture} alt="Foto de Samuel Ramos" />
    <TextContainer>
      <h1>Olá</h1>
      <h2>Me chamo Samuel</h2>
    </TextContainer>
    <InfosContainer />
  </Container>
);
