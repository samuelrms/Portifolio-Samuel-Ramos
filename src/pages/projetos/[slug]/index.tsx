import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';

import { ReactNode } from 'react';
import { LoadScreen, Thumb } from '../../../components';
import { Container } from '../../../styles/ProjectDynamicStyles';
import { ProjectUID } from '../../../types/Home.types';
import { useFetchData } from '../../../hooks';
import { noDataImg, urlReadmeGithub } from '../../../mocks';
import { decodeBase64 } from '../../../functions/decodeBase64';
import { Project, ReadmeContent } from '../../../types/Project';
import { CopyableCodeBlock } from '../../../components/CopyableCodeBlock';

export default function Projeto({ project }: ProjectUID) {
  const router = useRouter();

  if (router.isFallback) {
    return <LoadScreen />;
  }

  const thumb = project.thumb?.length > 0 ? project.thumb : noDataImg;

  const code = (children: ReactNode) => (
    <CopyableCodeBlock content={children as unknown as string} />
  );

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
        <ReactMarkdown
          // remarkPlugins={[remarkGfm]}
          components={{
            code: ({ children }) => code(children)
          }}
          className="reactMarkdown"
        >
          {project.content}
        </ReactMarkdown>

        <div className="contentAction">
          <a href={project.link} target="_blank" rel="noreferrer">
            <button type="button">Ver repositório</button>
          </a>
          {project.homepage && (
            <a href={project.homepage} target="_blank" rel="noreferrer">
              <button type="button">Visitar site</button>
            </a>
          )}
        </div>
      </main>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { slug } = context.params;

  let readmeData: ReadmeContent;
  try {
    readmeData = await useFetchData<ReadmeContent>(
      `${urlReadmeGithub}${slug}/readme`
    );
  } catch (error) {
    if (error.response && error.response.status === 404) {
      readmeData = { ...readmeData, content: '' };
    } else {
      throw error;
    }
  }

  const projectData = await useFetchData<Project>(`${urlReadmeGithub}${slug}`);

  const thumb = readmeData ? decodeBase64(readmeData.content) : '';

  const project = {
    slug: projectData.name,
    title: projectData.name,
    thumb,
    permissions: null,
    type: projectData.language,
    link: projectData.html_url,
    content: decodeBase64(readmeData.content, true),
    ...projectData
  };

  return {
    props: { project }
  };
};
