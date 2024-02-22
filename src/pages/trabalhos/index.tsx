import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { JobsDetails, SectionTitle } from '../../components';
import { Container } from '../../styles/CoursesStyles';
import { JobsProps } from '../../types/Job.types';
import { projectResponse } from '../../utils/getQueryPrismic';

export default function Jobs({ jobs }: JobsProps) {
  return (
    <Container>
      <Head>
        <meta charSet="utf-8" />
        <meta name="language" content="pt-BR" />
        <title>
          Trabalhos | Portifólio Samuel Ramos - Full-Stack Developer
        </title>
        <meta name="robots" content="all" />
        <meta
          name="keywords"
          content="nodejs-javascript-typescript-react-next-nestjs-wordpress-freelancer"
        />
        <meta
          name="description"
          content="Bem-vindo à minha página de trabalhos. Aqui você pode encontrar informações sobre minhas trabalhos online e presenciais, onde compartilho conhecimentos em desenvolvimento web com outras pessoas interessadas em aprender."
        />
        <meta
          property="og:description"
          content="Bem-vindo à minha página de trabalhos. Aqui você pode encontrar informações sobre minhas trabalhos online e presenciais, onde compartilho conhecimentos em desenvolvimento web com outras pessoas interessadas em aprender."
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
        <meta name="author" content="Samuel Ramos" />

        <meta property="og:type" content="page" />
        <meta property="og:url" content="samuelramos.dev/cursos" />
        <meta
          property="og:title"
          content="Trabalhos | Portifólio Samuel Ramos - Full-Stack Developer"
        />
        <meta property="article:author" content="Samuel Ramos" />
      </Head>
      <main className="container">
        <SectionTitle title="Trabalhos" />
        <section>
          {jobs?.map(data => (
            <JobsDetails
              key={data?.route}
              title={data?.title}
              imgURL={data?.thumb?.url}
              slug={data?.route}
              type={data?.type}
            />
          ))}
        </section>
      </main>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const jobs = (await projectResponse('jobs')).results.map(res => ({
    route: res.uid,
    ...res.data
  }));

  return {
    props: { jobs }
  };
};
