import Link from 'next/link';
import { LatestJobsArr } from '../../types/Home.types';
import { JobsItem } from '../JobsItem';
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
        <JobsItem
          key={data.uid}
          imgURL={data.thumb?.url}
          title={data.title}
          type={data.type}
          route={data.route}
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
