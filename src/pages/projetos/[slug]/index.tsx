import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { LoadScreen, Thumb } from '../../../components';
import { getPrismicClient } from '../../../services/prismic';
import { Container } from '../../../styles/ProjectDynamicStyles';
import { ProjectUID } from '../../../types/Home.types';

export default function Projeto({ project }: ProjectUID) {
  const router = useRouter();

  if (router.isFallback) {
    return <LoadScreen />;
  }

  return (
    <Container>
      <Head>
        <meta charSet="utf-8" />
        <meta name="language" content="pt-BR" />
        <title>
          {project.title} | Portifólio Samuel Ramos - Full-Stack Developer
        </title>
        <meta name="robots" content="all" />
        <meta name="description" content={project.description} />
        <meta
          name="keywords"
          content="nodejs-javascript-typescript-react-next-nestjs-wordpress-freelancer"
        />
        <meta property="og:image" content={project.thumb} />
        <meta property="og:image:secure_url" content={project.thumb} />
        <meta property="instagram:image" content={project.thumb} />
        <meta property="instagram:image:src" content={project.thumb} />
        <meta property="og:description" content={project.description} />
        <meta name="author" content="Samuel Ramos" />

        <meta property="og:type" content="page" />
        <meta
          property="og:url"
          content={`samuelramos.dev/projetos/${project.slug}`}
        />
        <meta
          property="og:title"
          content={`${project.title} | Portifólio Samuel Ramos - Full-Stack Developer`}
        />
        <meta property="article:author" content="Samuel Ramos" />
      </Head>
      <Thumb title={project.title} type={project.type} imgURL={project.thumb} />
      <main>
        <p>{project.description}</p>
        <a href={project.link}>
          <button type="button">Ver projeto repositório</button>
        </a>
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

export const getServerSideProps: GetServerSideProps = async context => {
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
    revalidate: 120
  };
};
