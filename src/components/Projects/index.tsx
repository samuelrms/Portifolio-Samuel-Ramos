import Link from 'next/link';
import { PropsProjectArr } from '../../types/Home.types';
import { ProjectsItem } from '../ProjectsItem';
import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';

export const Projects = ({ projects }: PropsProjectArr) => (
  <Container>
    <Link href="#ultimos-projetos">
      <SectionTitle id="ultimos-projetos" title="Últimos Projetos" />
    </Link>
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
    <Link href="/projetos">
      <button type="button">Ver todos os projetos</button>
    </Link>
  </Container>
);
