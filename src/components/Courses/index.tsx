import Link from 'next/link';
import { CoursesProps } from '../../types/Courses.types';
import { CoursesItem } from '../CoursesItem';
import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';

export const Courses = ({ courses }: CoursesProps) => (
  <Container>
    <Link
      href="#cursos"
      aria-label="Redirecionamento para seção de últimos cursos realizados"
    >
      <SectionTitle id="cursos" title="Últimos Cursos realizados" />
    </Link>
    <section>
      {courses.slice(0, 3).map(data => (
        <CoursesItem
          key={data.route}
          imgURL={data.certificate_image.url}
          title={data.title}
          type={data.achievement_platform}
          route={data.route}
        />
      ))}
    </section>
    <Link href="/cursos" aria-label="Redirecionamento para pagina de cursos">
      <button type="button" aria-label="Ver todos os cursos">
        Ver todos os cursos
      </button>
    </Link>
  </Container>
);
