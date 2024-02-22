import Link from 'next/link';
import { FC } from 'react';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { Props } from './ProjectsItem.types';
import { Container } from './styles';

export const JobsItem: FC<Props> = ({ imgURL, route, title, type }) => (
  <Container imgURL={imgURL} data-aos="fade-up">
    <section>
      <div className="overlay" />
      <div className="text">
        <h1># {title}</h1>
        <h2>- {type}</h2>
      </div>
    </section>
    <button type="button" aria-label="Container de ação para redirecionamento">
      <Link
        href={`/trabalhos/${route}`}
        aria-label={`Redirecionamento para pagina do trabalho ${title}`}
      >
        Ver mais <AiOutlineRightCircle />
      </Link>
    </button>
  </Container>
);
