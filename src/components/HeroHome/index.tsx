import { Container, TextContainer } from './styles';
import picture from '../../assets/samuel-rms.png';
import { InfosContainer } from '../InfosContainer';

export const HeroHome = () => (
  <Container data-aos="fade-up">
    <img src={picture} alt="Foto de Samuel Ramos" />
    <div>
      <TextContainer>
        <h1>Olá</h1>
        <h2>Me chamo Samuel</h2>
      </TextContainer>
      <InfosContainer />
    </div>
  </Container>
);
