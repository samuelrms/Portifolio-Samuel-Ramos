import Link from 'next/link';
import { CoursesProps } from '../../types/Courses.types';
import { CoursesItem } from '../CoursesItem';
import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';

export const Courses = ({ courses }: CoursesProps) => (
  <Container>
    <Link href="#cursos">
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
    <Link href="/cursos">
      <button type="button">Ver todos os cursos</button>
    </Link>
  </Container>
);
