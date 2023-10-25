import Link from 'next/link';
import { FC } from 'react';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { Props } from './CoursesItem.types';
import { Container } from './styles';

export const CoursesItem: FC<Props> = ({ imgURL, route, title, type }) => (
  <Container imgURL={imgURL} data-aos="fade-up">
    <section>
      <div className="overlay" />
      <div className="text">
        <h1># {title}</h1>
        <h2>- {type}</h2>
      </div>
    </section>
    <button type="button" aria-label="Ver detalhes">
      <Link
        href={`/cursos/${route}`}
        aria-label={`Ver detalhes do curso de ${title}`}
      >
        Ver detalhes <AiOutlineRightCircle />
      </Link>
    </button>
  </Container>
);
