import { GetStaticProps } from 'next';
import Head from 'next/head';

import { ProjectDetails, SectionTitle } from '../../components';
import { Container } from '../../styles/ProjectsStyles';
import { PropsProjectArr } from '../../types/Home.types';
import { projectResponse } from '../../utils/getQueryPrismic';

export default function Projetos({ projects }: PropsProjectArr) {
  return (
    <Container>
      <Head>
        <title>Projetos | Portifólio Samuel Ramos - Full-Stack Developer</title>
        <meta charSet="utf-8" />
        <meta name="language" content="pt-BR" />
        <meta
          name="description"
          content="Sinta-se à vontade para explorar meus projetos e entrar em contato comigo se tiver alguma dúvida ou quiser saber mais sobre meu trabalho. Obrigado por visitar!"
        />
        <meta name="robots" content="all" />
        <meta name="author" content="Samuel Ramos" />
        <meta
          name="keywords"
          content="nodejs-javascript-typescript-react-next-nestjs-wordpress-freelancer"
        />

        <meta property="og:type" content="page" />
        <meta property="og:url" content="samuelramos.dev/projetos" />
        <meta
          property="og:title"
          content="Projetos | Portifólio Samuel Ramos - Full-Stack Developer"
        />
        <meta
          property="og:image"
          content="https://images.prismic.io/portifolio-samuel-rms/722b4aac-b5a4-4924-9c8a-61bf9096a108_projetos.png?auto=compress,format"
        />
        <meta
          property="og:description"
          content="Sinta-se à vontade para explorar meus projetos e entrar em contato comigo se tiver alguma dúvida ou quiser saber mais sobre meu trabalho. Obrigado por visitar!"
        />
        <meta property="article:author" content="Samuel Ramos" />
      </Head>
      <main className="container">
        <SectionTitle title="Projetos" />
        <section>
          {projects.map(data => (
            <ProjectDetails
              key={data.slug}
              title={data.title}
              type={data.type}
              slug={data.slug}
              imgURL={data.thumb}
            />
          ))}
        </section>
      </main>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = (await projectResponse('projects')).results.map(project => ({
    slug: project.uid,
    title: project.data.title,
    type: project.data.type,
    description: project.data.description,
    link: project.data.project_link.url,
    thumb: project.data.thumb.url
  }));

  return {
    props: {
      projects
    }
  };
};
