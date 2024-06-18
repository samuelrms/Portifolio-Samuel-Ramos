import Link from 'next/link';
import { FC } from 'react';
import { Props } from './ProjectDetails.types';
import { Container } from './styles';

export const ProjectDetails: FC<Props> = ({ title, imgURL, slug, type }) => (
  <Container data-aos="fade-up" imgURL={imgURL}>
    <Link
      href={`/projetos/${slug}`}
      aria-label={`Redirecionamento para pagina do projeto ${title}`}
    >
      <div className="overlay" />
      <section>
        <h1>{title.replace(/-/g, ' ')}</h1>
        <h2>{type}</h2>
      </section>
    </Link>
  </Container>
);
