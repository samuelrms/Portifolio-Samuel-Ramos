import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Container } from '../../styles/ProjectsStyles';
import { hour } from '../../constants';
import { projectResponse } from '../../utils/getQueryPrismic';
import { CoursesProps } from '../../types/Courses.types';
import { CoursesDetails } from '../../components/CoursesDetails';

export default function Courses({ courses }: CoursesProps) {
  return (
    <Container>
      <Head>
        <title>Cursos | Portifólio Samuel Ramos</title>
        <meta
          name="description"
          content="Aqui se encontram os cursos que já realizei!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta property="instagram:image" content="/ogimage.png" />
        <meta property="instagram:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Aqui se encontram os cursos que já realizei!"
        />
      </Head>
      <main className="container">
        {courses.map(data => (
          <CoursesDetails
            key={data.route}
            title={data.title}
            imgURL={data.certificate_image.url}
            slug={data.route}
            type={data.achievement_platform}
          />
        ))}
      </main>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const courses = (await projectResponse('courses')).results.map(res => ({
    route: res.uid,
    ...res.data
  }));

  return {
    props: { courses },
    revalidate: hour
  };
};
