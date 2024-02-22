import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { ExperienceDetails, SectionTitle } from '../../components';
import { Container } from '../../styles/JobStyles';
import { ExperienceProps } from '../../types/Experience.types';
import { projectResponse } from '../../utils/getQueryPrismic';

export default function Experience({ experiences }: ExperienceProps) {
  console.log(experiences);
  return (
    <Container>
      <Head>
        <meta charSet="utf-8" />
        <meta name="language" content="pt-BR" />
        <title>
          Experiências | Portifólio Samuel Ramos - Full-Stack Developer
        </title>
        <meta name="robots" content="all" />
        <meta
          name="keywords"
          content="nodejs-javascript-typescript-react-next-nestjs-wordpress-freelancer"
        />
        <meta
          name="description"
          content="Bem-vindo à minha página de experiências. Aqui você pode encontrar informações sobre minhas experiências online e presenciais, onde compartilho conhecimentos em desenvolvimento web com outras pessoas interessadas em aprender."
        />
        <meta
          property="og:description"
          content="Bem-vindo à minha página de experiências. Aqui você pode encontrar informações sobre minhas experiências online e presenciais, onde compartilho conhecimentos em desenvolvimento web com outras pessoas interessadas em aprender."
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
          content="experiências | Portifólio Samuel Ramos - Full-Stack Developer"
        />
        <meta property="article:author" content="Samuel Ramos" />
      </Head>
      <main className="container">
        <SectionTitle title="Experiências" />
        <section>
          {experiences?.map(data => (
            <ExperienceDetails
              key={data?.route}
              title={data?.enterprise}
              slug={data?.route}
              type={data?.function}
            />
          ))}
        </section>
      </main>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const experiences = (await projectResponse('experience_list')).results.map(
    res => ({
      route: res.uid,
      ...res.data
    })
  );

  return {
    props: { experiences }
  };
};
