import { FC } from 'react';
import Link from 'next/link';
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
          <Link
            href="#home-hero"
            aria-label="Redirecionamento para seção de home hero"
          >
            <h1 id="home-hero">{value.title}</h1>
          </Link>
          <h2>{value.subtitle}</h2>
        </TextContainer>
        <InfosContainer data={value} />
      </div>
    </Container>
  );
};
