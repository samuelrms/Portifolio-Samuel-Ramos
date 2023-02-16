import { GetStaticProps } from 'next';
import Head from 'next/head';

import { ProjectDetails } from '../../components';
import { Container } from '../../styles/ProjectsStyles';
import { hour } from '../../constants';
import { PropsProjectArr } from '../../types';
import { projectResponse } from '../../utils/getQueryPrismic';

export default function Projetos({ projects }: PropsProjectArr) {
  return (
    <Container>
      <Head>
        <title>Projetos | Portifólio Samuel Ramos</title>
        <meta
          name="description"
          content="Aqui se encontram projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta property="instagram:image" content="/ogimage.png" />
        <meta property="instagram:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Aqui se encontram projetos desenvolvidos por mim"
        />
      </Head>
      <main className="container">
        {projects.map(data => (
          <ProjectDetails
            key={data.slug}
            title={data.title}
            type={data.type}
            slug={data.slug}
            imgURL={data.thumb}
          />
        ))}
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
