import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Container } from '../../styles/CoursesStyles';
import { projectResponse } from '../../utils/getQueryPrismic';
import { CoursesProps } from '../../types/Courses.types';
import { CoursesDetails } from '../../components/CoursesDetails';
import { SectionTitle } from '../../components';

export default function Courses({ courses }: CoursesProps) {
  return (
    <Container>
      <Head>
        <title>Cursos | Portifólio Samuel Ramos</title>
        <meta
          name="description"
          content="Bem-vindo à minha página de cursos. Aqui você pode encontrar informações sobre meus cursos online e presenciais, onde compartilho minhas experiências e conhecimentos em desenvolvimento web com outras pessoas interessadas em aprender."
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta property="instagram:image" content="/ogimage.png" />
        <meta property="instagram:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Bem-vindo à minha página de cursos. Aqui você pode encontrar informações sobre meus cursos online e presenciais, onde compartilho minhas experiências e conhecimentos em desenvolvimento web com outras pessoas interessadas em aprender."
        />
      </Head>
      <main className="container">
        <SectionTitle title="Cursos" />
        <section>
          {courses.map(data => (
            <CoursesDetails
              key={data.route}
              title={data.title}
              imgURL={data.certificate_image.url}
              slug={data.route}
              type={data.achievement_platform}
            />
          ))}
        </section>
      </main>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const courses = (await projectResponse('courses')).results.map(res => ({
    route: res.uid,
    ...res.data
  }));

  return {
    props: { courses }
  };
};
