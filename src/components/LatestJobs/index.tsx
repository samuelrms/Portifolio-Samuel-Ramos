import Link from 'next/link';
import { noDataImg } from '../../mocks';
import { LatestJobsArr } from '../../types/Home.types';
import { ProjectsItem } from '../ProjectsItem';
import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';

export const LatestJobs = ({ jobs }: LatestJobsArr) => (
  <Container>
    <Link
      href="#ultimos-trabalhos"
      aria-label="Redirecionamento para seção de últimos trabalhos"
    >
      <SectionTitle id="ultimos-trabalhos" title="Últimos Trabalhos" />
    </Link>
    <section>
      {jobs.slice(0, 3).map(data => (
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
      href="/trabalhos"
      aria-label="Redirecionamento para pagina de trabalhos"
    >
      <button
        type="button"
        aria-label="Redirecionamento para ver todos os trabalhos"
      >
        Ver todos os trabalhos
      </button>
    </Link>
  </Container>
);
