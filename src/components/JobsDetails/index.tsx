import Link from 'next/link';
import { FC } from 'react';
import { Props } from './JobDetails.types';
import { Container } from './styles';

export const JobsDetails: FC<Props> = ({ title, imgURL, slug, type }) => (
  <Container data-aos="fade-up" imgURL={imgURL}>
    <Link
      href={`/trabalhos/${slug}`}
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
