import Link from 'next/link';
import { FC } from 'react';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { Props } from './ProjectsItem.types';
import { Container } from './styles';

export const ProjectsItem: FC<Props> = ({ imgURL, slug, title, type }) => (
  <Container imgURL={imgURL} data-aos="fade-up">
    <section>
      <div className="overlay" />
      <div className="text">
        <h1># {title}</h1>
        <h2>- {type}</h2>
      </div>
    </section>
    <button type="button">
      <Link href={`/projetos/${slug}`}>
        Ver mais <AiOutlineRightCircle />
      </Link>
    </button>
  </Container>
);
