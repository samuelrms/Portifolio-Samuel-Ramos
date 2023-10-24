import { GetServerSideProps } from 'next';
// import Prismic from '@prismicio/client';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { LoadScreen, Thumb } from '../../../components';
import { getPrismicClient } from '../../../services/prismic';
import { Container } from '../../../styles/ProjectDynamicStyles';
import { ProjectUID } from '../../../types/Home.types';
import { projectByGithub } from '../../../utils/getQueryPrismic';
import { useFetchData } from '../../../hooks';
import { urlReadmeGithub } from '../../../mocks';
import { decodeBase64 } from '../../../functions/decodeBase64';

export default function Projeto({ project }: ProjectUID) {
  const router = useRouter();

  if (router.isFallback) {
    return <LoadScreen />;
  }

  const thumb = project?.thumb ?? 'Sem imagem no momento';

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
        <meta property="og:image" content={thumb} />
        <meta property="og:image:secure_url" content={thumb} />
        <meta property="instagram:image" content={thumb} />
        <meta property="instagram:image:src" content={thumb} />
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
      <Thumb title={project.title} type={project.type} imgURL={thumb} />
      <main>
        <p>{project.description}</p>
        <a href={project.link} target={'_blank'}>
          <button type="button">Ver projeto repositório</button>
        </a>
      </main>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;

  // console.log(slug);

  let readmeData;
  try {
    readmeData = await useFetchData(`${urlReadmeGithub}${slug}/readme`);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      readmeData = { content: '' };
    } else {
      console.error('Erro ao buscar o README:', error);
      throw error;
    }
  }

  const projectData = await useFetchData(`${urlReadmeGithub}${slug}`);

  // console.log(readmeData);

  // Verifique se readmeData é definido e use decodeBase64 somente se for
  const thumb = readmeData ? decodeBase64(readmeData.content) : '';

  const project = {
    slug: projectData.name,
    title: projectData.name,
    thumb: thumb,
    permissions: null,
    type: projectData.language,
    link: projectData.html_url,
    content: decodeBase64(readmeData.content, true),
    ...projectData
  };

  console.log(project);

  return {
    props: { project }
  };
};
