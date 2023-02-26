import { FC } from 'react';
import { Container, TextContainer } from './styles';
import { InfosContainer } from '../InfosContainer';
import { Props } from './HomeHero.types';

export const HeroHome: FC<Props> = ({ data }) => {
  const value = data[0];
  return (
    <Container data-aos="fade-up">
      <div data-aos="fade-up">
        <img src={value.img} alt="Foto de Samuel Ramos" />
      </div>
      <div>
        <TextContainer>
          <h1>{value.title}</h1>
          <h2>{value.subtitle}</h2>
        </TextContainer>
        <InfosContainer data={value} />
      </div>
    </Container>
  );
};
