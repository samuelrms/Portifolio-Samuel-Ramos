import { GetStaticPaths, GetStaticProps } from 'next';
import Prismic from '@prismicio/client';

import { Header, LoadScreen, Thumb } from '../../../components';
import { day } from '../../../constants';
import { getPrismicClient } from '../../../services/prismic';
import { Container } from '../../../styles/ProjectDynamicStyles';
import { ProjectUID } from '../../../types';
import { useRouter } from 'next/router';

export default function Projeto({ project }: ProjectUID) {
  const router = useRouter();

  if (router.isFallback) {
    return <LoadScreen />;
  }

  return (
    <Container>
      <Header />
      <Thumb title={project.title} type={project.type} imgURL={project.thumb} />
      <main>
        <p>{project.description}</p>
        <button type="button">
          <a href={project.link}>Ver projeto online</a>
        </button>
      </main>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();

  const projects = await prismic.query([
    Prismic.predicates.at('document.type', 'projects')
  ]);

  const paths = projects.results.map(data => ({
    params: {
      slug: data.uid
    }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;

  const response = await prismic.getByUID('projects', String(slug), {});

  const project = {
    slug: response.uid,
    title: response.data.title,
    type: response.data.type,
    link: response.data.project_link.url,
    thumb: response.data.thumb.url,
    description: response.data.description
  };

  return {
    props: { project },
    revalidate: day
  };
};
