import Link from 'next/link';
import { FC } from 'react';
import { Props } from './ExperienceDetails.types';
import { Container } from './styles';

export const ExperienceDetails: FC<Props> = ({ title, slug, type }) => (
  <Container data-aos="fade-up">
    <Link
      href={`/experiencia/${slug}`}
      aria-label={`Redirecionamento para pagina do trabalho de ${title}`}
    >
      <div className="overlay" />
      <section>
        <h1>{title}</h1>
        <h2>{type}</h2>
      </section>
    </Link>
  </Container>
);
