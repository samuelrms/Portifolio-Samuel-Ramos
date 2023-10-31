import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { useEffect, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Container } from '../../styles/CoursesStyles';
import { projectResponse } from '../../utils/getQueryPrismic';
import {
  Courses as CoursesTypes,
  CoursesProps
} from '../../types/Courses.types';
import { CoursesDetails } from '../../components/CoursesDetails';
import { SectionTitle } from '../../components';
import { FormValues } from '../../types';
import { Search } from '../../components/Search';
import { removeCharacter } from '../../functions/clearStr';

export default function Courses({ courses }: CoursesProps) {
  const [searchCourse, setSearchCourse] = useState<CoursesTypes[]>(courses);
  const { control, watch, setValue } = useFormContext<FormValues>();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const watchAllFields = watch('searchCourses');

  const onSearch = () => {
    if (watchAllFields !== '') {
      const searchingCourse = courses.filter(
        data =>
          removeCharacter(data.title).includes(
            removeCharacter(watchAllFields)
          ) ||
          removeCharacter(data.achievement_platform).includes(
            removeCharacter(watchAllFields)
          )
      );

      setSearchCourse(searchingCourse);
    }
    return null;
  };

  const onClear = () => {
    setValue('searchCourses', '');
    setSearchCourse(courses);
  };

  useEffect(() => {
    if (watchAllFields) {
      if (watchAllFields.length >= 3) {
        onSearch();
      }

      if (watchAllFields.length < 2) {
        setSearchCourse(courses);
      }
    }
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
        <meta charSet="utf-8" />
        <meta name="language" content="pt-BR" />
        <title> Cursos | Portifólio Samuel Ramos - Full-Stack Developer</title>
        <meta name="robots" content="all" />
        <meta
          name="keywords"
          content="nodejs-javascript-typescript-react-next-nestjs-wordpress-freelancer"
        />
        <meta
          name="description"
          content="Bem-vindo à minha página de cursos. Aqui você pode encontrar informações sobre meus cursos online e presenciais, onde compartilho minhas experiências e conhecimentos em desenvolvimento web com outras pessoas interessadas em aprender."
        />
        <meta
          property="og:description"
          content="Bem-vindo à minha página de cursos. Aqui você pode encontrar informações sobre meus cursos online e presenciais, onde compartilho minhas experiências e conhecimentos em desenvolvimento web com outras pessoas interessadas em aprender."
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
          content="Cursos | Portifólio Samuel Ramos - Full-Stack Developer"
        />
        <meta property="article:author" content="Samuel Ramos" />
      </Head>
      <main className="container">
        <SectionTitle title="Cursos" />
        <Search
          name="searchCourses"
          control={control}
          onClear={onClear}
          placeholder="Pesquise por cursos específicos ou plataforma de cursos..."
          ref={inputRef}
          watchAllFields={!!watchAllFields}
        />
        <section>
          {searchCourse.map(data => (
            <CoursesDetails
              key={data.route}
              title={data.title}
              imgURL={data.certificate_image.url}
              slug={data.route}
              type={data.achievement_platform}
            />
          ))}
        </section>
      </main>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const courses = (await projectResponse('courses')).results.map(res => ({
    route: res.uid,
    ...res.data
  }));

  return {
    props: { courses }
  };
};
