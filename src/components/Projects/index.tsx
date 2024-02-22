import Link from 'next/link';
import { noDataImg } from '../../mocks';
import { PropsProjectArr } from '../../types/Home.types';
import { ProjectsItem } from '../ProjectsItem';
import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';

export const Projects = ({ projects }: PropsProjectArr) => (
  <Container>
    <Link
      href="#ultimos-projetos"
      aria-label="Redirecionamento para seção de últimos projetos"
    >
      <SectionTitle id="ultimos-projetos" title="Últimos Projetos GitHub" />
    </Link>
    <section>
      {projects.slice(0, 3).map(data => (
        <ProjectsItem
          key={data.slug}
          imgURL={data.thumb?.length > 0 ? data.thumb : noDataImg}
          title={data.title}
          type={data.type}
          slug={data.slug}
        />
      ))}
    </section>
    <Link
      href="/projetos"
      aria-label="Redirecionamento para pagina de projetos"
    >
      <button
        type="button"
        aria-label="Redirecionamento para ver todos os projetos"
      >
        Ver todos os projetos
      </button>
    </Link>
  </Container>
);
