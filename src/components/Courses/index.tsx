import Link from 'next/link';
import { CoursesProps } from '../../types/Courses.types';
import { CoursesItem } from '../CoursesItem';
import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';

export const Courses = ({ courses }: CoursesProps) => (
  <Container>
    <SectionTitle title="Últimos Cursos realizados" />
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
    <button type="button">
      <Link href="/cursos">Ver todos os cursos</Link>
    </button>
  </Container>
);
