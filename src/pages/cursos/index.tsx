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
        <meta charSet="utf-8" />
        <meta name="language" content="pt-BR" />
        <title> Cursos | Portifólio Samuel Ramos - Full-Stack Developer</title>
        <meta name="robots" content="all" />
        <meta
          name="keywords"
          content="nodejs-javascript-typescript-react-next-nestjs-wordpress-freelancer"
        />
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
        <meta
          property="og:image"
          content="https://images.prismic.io/portifolio-samuel-rms/8029349a-26d4-483b-8ea1-77b0207a8f1c_cursos.png?auto=compress,format"
        />
        <meta
          property="og:image:secure_url"
          content="https://images.prismic.io/portifolio-samuel-rms/8029349a-26d4-483b-8ea1-77b0207a8f1c_cursos.png?auto=compress,format"
        />
        <meta
          property="instagram:image"
          content="https://images.prismic.io/portifolio-samuel-rms/8029349a-26d4-483b-8ea1-77b0207a8f1c_cursos.png?auto=compress,format"
        />
        <meta
          property="instagram:image:src"
          content="https://images.prismic.io/portifolio-samuel-rms/8029349a-26d4-483b-8ea1-77b0207a8f1c_cursos.png?auto=compress,format"
        />
        <meta
          property="og:description"
          content="Bem-vindo à minha página de cursos. Aqui você pode encontrar informações sobre meus cursos online e presenciais, onde compartilho minhas experiências e conhecimentos em desenvolvimento web com outras pessoas interessadas em aprender."
        />
        <meta name="author" content="Samuel Ramos" />

        <meta property="og:type" content="page" />
        <meta property="og:url" content="samuelramos.dev/cursos" />
        <meta
          property="og:title"
          content="Cursos | Portifólio Samuel Ramos - Full-Stack Developer"
        />
        <meta property="article:author" content="Samuel Ramos" />
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
