import { FC } from 'react';
import Link from 'next/link';
import { Props } from './CoursesDetails.types';
import { Container } from './styles';

export const CoursesDetails: FC<Props> = ({ title, imgURL, slug, type }) => (
  <Container imgURL={imgURL}>
    <Link href={`/cursos/${slug}`}>
      <div className="overlay" />
      <section>
        <h1>{title}</h1>
        <h2>{type}</h2>
      </section>
    </Link>
  </Container>
);