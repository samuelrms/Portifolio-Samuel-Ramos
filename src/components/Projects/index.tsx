import Link from 'next/link';
import { ProjectsItem } from '../ProjectsItem';
import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';

const urlImage =
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';

export const Projects = () => (
  <Container>
    <SectionTitle title="Últimos Projetos" />
    <section>
      <ProjectsItem
        imgURL={urlImage}
        title="Projeto 01"
        type="Website"
        slug="projetos1"
      />
      <ProjectsItem
        imgURL={urlImage}
        title="Projeto 02"
        type="Website"
        slug="projetos2"
      />
      <ProjectsItem
        imgURL={urlImage}
        title="Projeto 03"
        type="Website"
        slug="projetos3"
      />
    </section>
    <button type="button">
      <Link href="/projetos">
        <a>Ver todos os projetos</a>
      </Link>
    </button>
  </Container>
);
