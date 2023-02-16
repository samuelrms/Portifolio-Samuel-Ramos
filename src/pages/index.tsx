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
import { hour } from '../constants';
import { PropsHome } from '../types';
import { projectResponse } from '../utils/getQueryPrismic';

export default function Home({
  projects,
  homeHero,
  experience,
  skills
}: PropsHome) {
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
        <Experiences experience={experience} />
        <Projects projects={projects} />
        <Guideline data={skills} />
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

  const homeHero = (await projectResponse('home_hero')).results.map(hero => ({
    img: hero.data.photo.url,
    title: hero.data.title,
    subtitle: hero.data.subtitle,
    presentation_area: hero.data.presentation_area,
    presentation_skills: hero.data.presentation_skills,
    about: hero.data.about
  }));

  const experience = (await projectResponse('experience')).results.map(
    ({ data }) => data
  );

  const skills = (await projectResponse('skills')).results.map(({ data }) => ({
    skillsTitle: data.skills_title,
    skills: data.skills
  }));

  return {
    props: {
      projects,
      homeHero,
      experience,
      skills
    },
    revalidate: hour
  };
};
