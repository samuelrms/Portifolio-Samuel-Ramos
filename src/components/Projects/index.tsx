import Link from 'next/link';
import { PropsProjectArr } from '../../types';
import { ProjectsItem } from '../ProjectsItem';
import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';

export const Projects = ({ projects }: PropsProjectArr) => (
  <Container>
    <SectionTitle title="Últimos Projetos" />
    <section>
      {projects.slice(0, 3).map(data => (
        <ProjectsItem
          key={data.slug}
          imgURL={data.thumb}
          title={data.title}
          type={data.type}
          slug={data.slug}
        />
      ))}
    </section>
    <button type="button">
      <Link href="/projetos">Ver todos os projetos</Link>
    </button>
  </Container>
);
