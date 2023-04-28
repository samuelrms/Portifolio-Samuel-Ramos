import { GetStaticProps } from 'next';
import Head from 'next/head';

import { ProjectDetails, SectionTitle } from '../../components';
import { Container } from '../../styles/ProjectsStyles';
import { hour } from '../../constants';
import { PropsProjectArr } from '../../types/Home.types';
import { projectResponse } from '../../utils/getQueryPrismic';

export default function Projetos({ projects }: PropsProjectArr) {
  return (
    <Container>
      <Head>
        <title>Projetos | Portifólio Samuel Ramos</title>
        <meta
          name="description"
          content="Sinta-se à vontade para explorar meus projetos e entrar em contato comigo se tiver alguma dúvida ou quiser saber mais sobre meu trabalho. Obrigado por visitar!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta property="instagram:image" content="/ogimage.png" />
        <meta property="instagram:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sinta-se à vontade para explorar meus projetos e entrar em contato comigo se tiver alguma dúvida ou quiser saber mais sobre meu trabalho. Obrigado por visitar!"
        />
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
    },
    revalidate: hour
  };
};
