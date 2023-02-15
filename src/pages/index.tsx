import { GetStaticProps } from 'next';
import Head from 'next/head';

import {
  ContactForm,
  Experiences,
  Footer,
  Guideline,
  Header,
  HeroHome,
  Projects
} from '../components';
import { HomeContainer } from '../styles/HomeStyles';
import { day } from '../constants';
import { PropsHome } from '../types';
import { projectResponse } from '../utils/getQueryPrismic';

export default function Home({ projects, homeHero }: PropsHome) {
  return (
    <HomeContainer>
      <Head>
        <title>Home | Portifólio Samuel Ramos</title>
        <meta
          name="description"
          content="Sou um dev Front-end e aqui apresento alguns projetos desenvolvidos por mim, tecnologias que utilizo e outros..."
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta property="instagram:image" content="/ogimage.png" />
        <meta property="instagram:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um dev Front-end e aqui apresento alguns projetos desenvolvidos por mim, tecnologias que utilizo e outros..."
        />
      </Head>
      <Header />
      <main className="container">
        <HeroHome data={homeHero} />
        <Experiences />
        <Projects projects={projects} />
        <Guideline />
        <ContactForm />
      </main>
      <Footer />
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = (await projectResponse('projects')).results.map(project => ({
    slug: project.uid,
    title: project.data.title,
    type: project.data.type,
    description: project.data.description,
    link: project.data.project_link.url,
    thumb: project.data.thumb.url
  }));

  const homeHero = (await projectResponse('home_hero')).results.map(
    ({ data }) => ({
      img: data.photo.url,
      title: data.title,
      subtitle: data.subtitle,
      presentation_area: data.presentation_area,
      presentation_skills: data.presentation_skills
    })
  );

  return {
    props: {
      projects,
      homeHero
    },
    revalidate: day
  };
};
