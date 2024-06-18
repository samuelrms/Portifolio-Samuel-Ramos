import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { ProjectDetails, SectionTitle } from '../../components';
import { Search } from '../../components/Search';
import { removeCharacter } from '../../functions/clearStr';
import { decodeBase64 } from '../../functions/decodeBase64';
import { projectByGithub } from '../../functions/fetchSearchProjects';
import { useFetchData } from '../../hooks';
import { noDataImg, urlReadmeGithub } from '../../mocks';
import { Container } from '../../styles/ProjectsStyles';
import { FormValues } from '../../types';
import { ProjectProps, PropsProjectArr } from '../../types/Home.types';
import { ReadmeContent } from '../../types/Project';

export default function Projetos({ projects }: PropsProjectArr) {
  const [searchProject, setSearchProject] = useState<ProjectProps[]>(projects);
  const { control, watch, setValue } = useFormContext<FormValues>();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const watchAllFields = watch('searchProjects');

  const onSearch = () => {
    if (watchAllFields !== '') {
      const searchingProject = projects.filter(
        project =>
          removeCharacter(project.title).includes(
            removeCharacter(watchAllFields)
          ) ||
          removeCharacter(project.type)?.includes(
            removeCharacter(watchAllFields)
          )
      );

      setSearchProject(searchingProject);
    }
    return null;
  };

  const onClear = () => {
    setValue('searchProjects', '');
    setSearchProject(projects);
  };

  useEffect(() => {
    if (watchAllFields) {
      if (watchAllFields.length >= 3) {
        onSearch();
      }

      if (watchAllFields.length < 2) {
        setSearchProject(projects);
      }
    }

    return () => {};
  }, [watchAllFields]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'Backspace') {
        onClear();
      }
    };

    if (inputRef.current) {
      inputRef.current.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [inputRef]);

  useEffect(
    () => () => {
      onClear();
    },
    []
  );

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
          content="https://images.prismic.io/portifolio-samuel-rms/90dcb6b7-7114-4be7-b301-014738837fba_Screenshot+from+2023-10-30+10-37-59.png?auto=compress,format"
        />
        <meta
          property="og:description"
          content="Sinta-se à vontade para explorar meus projetos e entrar em contato comigo se tiver alguma dúvida ou quiser saber mais sobre meu trabalho. Obrigado por visitar!"
        />
        <meta property="article:author" content="Samuel Ramos" />
      </Head>
      <main className="container">
        <SectionTitle title="Projetos" />
        <Search
          name="searchProjects"
          control={control}
          onClear={onClear}
          placeholder="Pesquise por projetos específicos ou linguagem predominante..."
          ref={inputRef}
          watchAllFields={!!watchAllFields}
        />
        <section>
          {searchProject.length > 0 &&
            searchProject.map(data => (
              <ProjectDetails
                key={data.slug}
                title={data.title}
                type={data.type}
                slug={data.slug}
                imgURL={data.thumb?.length > 0 ? data.thumb : noDataImg}
              />
            ))}
        </section>
        {searchProject.length === 0 && (
          <div className="notFound">
            <h2>404</h2>
            <h3>ERROR</h3>
            <h4>Nenhum projeto encontrado!</h4>
          </div>
        )}
      </main>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const projects = await Promise.all(
    (
      await projectByGithub()
    ).map(async project => {
      try {
        const readmeData = await useFetchData<ReadmeContent>(
          urlReadmeGithub(project.name).readme
        );
        return {
          slug: project.name,
          title: project.name,
          ...project,
          thumb: decodeBase64(readmeData.content),
          permissions: null,
          type: project.language
        };
      } catch (error) {
        return {
          slug: project.name,
          title: project.name,
          ...project,
          thumb: null,
          permissions: null,
          type: project.language
        };
      }
    })
  );

  const removeProjects = projects.filter(
    project => project.slug !== 'samuelrms'
  );

  return {
    props: {
      projects: removeProjects
    }
  };
};
