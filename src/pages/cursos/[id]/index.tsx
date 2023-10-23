import React from 'react';
import {GetServerSideProps, GetStaticPaths} from 'next';
import Prismic from '@prismicio/client';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Container } from '../../../styles/CoursesDynamicStyles';
import { getPrismicClient } from '../../../services/prismic';
import { LoadScreen, Thumb } from '../../../components';
import { Course } from '../../../types/Courses.types';

export default function Curso({ course }: Course) {
  const router = useRouter();

  if (router.isFallback) {
    return <LoadScreen />;
  }

  const resume = course.resume[0].text;

  return (
    <Container>
      <Head>
        <meta charSet="utf-8" />
        <meta name="language" content="pt-BR" />
        <title>
          {course.title} | Portifólio Samuel Ramos - Full-Stack Developer
        </title>
        <meta name="robots" content="all" />
        <meta name="description" content={resume} />
        <meta
          name="keywords"
          content="nodejs-javascript-typescript-react-next-nestjs-wordpress-freelancer"
        />
        <meta property="og:image" content={course.certificate_image.url} />
        <meta
          property="og:image:secure_url"
          content={course.certificate_image.url}
        />
        <meta
          property="instagram:image"
          content={course.certificate_image.url}
        />
        <meta
          property="instagram:image:src"
          content={course.certificate_image.url}
        />
        <meta property="og:description" content={resume} />
        <meta name="author" content="Samuel Ramos" />

        <meta property="og:type" content="page" />
        <meta
          property="og:url"
          content={`samuelramos.dev/cursos/${course.uid}`}
        />
        <meta
          property="og:title"
          content={`${course.title} | Portifólio Samuel Ramos - Full-Stack Developer`}
        />
        <meta property="article:author" content="Samuel Ramos" />
      </Head>
      <Thumb
        title={course.title}
        type={course.achievement_platform}
        imgURL={course.certificate_image.url}
      />
      <main>
        <div>
          <p>Carga horaria: {course.workload}</p>
        </div>
        {course.resume.map((data, index) => (
          <p key={index}>{data.text}</p>
        ))}
        <a href={course.certificates_link.url} target="_blank" rel="noreferrer">
          <button type="button">Ver certificado</button>
        </a>
      </main>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();

  const projects = await prismic.query([
    Prismic.predicates.at('document.type', 'courses')
  ]);

  const paths = projects.results.map(data => ({
    params: {
      id: data.uid
    }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getServerSideProps: GetServerSideProps = async context => {
  const prismic = getPrismicClient();
  const { id } = context.params;

  const response = await prismic.getByUID('courses', String(id), {});

  const course = { ...response.data, uid: response.uid };

  return {
    props: { course },
    revalidate: 120
  };
};
