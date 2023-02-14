import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';

import { Header, ProjectDetails } from '../../components';
import { getPrismicClient } from '../../services/prismic';
import { Container } from '../../styles/ProjectsStyles';
import { day } from '../../constants';
import { PropsProjectArr } from '../../types';

export default function Projetos({ projects }: PropsProjectArr) {
  return (
    <Container>
      <Header />
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
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projects')],
    { orderings: '[document.first_publication_data desc]' }
  );

  const projects = projectResponse.results.map(project => ({
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
    revalidate: day
  };
};
