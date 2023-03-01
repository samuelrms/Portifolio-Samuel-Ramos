import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Container } from '../../../styles/CoursesDynamicStyles';
import { getPrismicClient } from '../../../services/prismic';
import { LoadScreen, Thumb } from '../../../components';
import { day } from '../../../constants';
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
        <title>{course.title} | Portifólio Samuel Ramos</title>
        <meta name="description" content={resume} />
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
        <p>{resume}</p>
        <button type="button">
          <a
            href={course.certificates_link.url}
            target="_blank"
            rel="noreferrer"
          >
            Ver certificado
          </a>
        </button>
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

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { id } = context.params;

  const response = await prismic.getByUID('courses', String(id), {});

  const course = response.data;

  return {
    props: { course },
    revalidate: day
  };
};
