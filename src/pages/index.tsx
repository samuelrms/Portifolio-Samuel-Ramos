import { GetServerSideProps } from 'next';
import Head from 'next/head';

import {
  ContactForm,
  Courses,
  Experiences,
  Guideline,
  HeroHome,
  Projects
} from '../components';
import { HomeContainer } from '../styles/HomeStyles';
import { PropsHome } from '../types/Home.types';
import { projectResponse } from '../utils/getQueryPrismic';
import { useFetchData } from '../hooks';
import { ReadmeContent } from '../types/Project';
import { urlReadmeGithub } from '../mocks';
import { decodeBase64 } from '../functions/decodeBase64';
import { projectByGithub } from '../functions/fetchSearchProjects';

export default function Home({
  projects,
  homeHero,
  experience,
  skills,
  courses
}: PropsHome) {
  return (
    <HomeContainer>
      <Head>
        <meta charSet="utf-8" />
        <meta name="language" content="pt-BR" />
        <title> Home | Portifólio Samuel Ramos - Full-Stack Developer</title>
        <meta name="robots" content="all" />
        <meta
          name="keywords"
          content="informações-sobre-pessoal-curiosidades-experiencia-resumo-qualidades-projetos-cursos-techs-skills"
        />
        <meta
          property="og:image"
          content="https://images.prismic.io/portifolio-samuel-rms/112e8b0d-1dbe-4230-bd20-6ad656faed0f_ogimage.png?auto=compress,format"
        />
        <meta
          property="og:image:secure_url"
          content="https://images.prismic.io/portifolio-samuel-rms/112e8b0d-1dbe-4230-bd20-6ad656faed0f_ogimage.png?auto=compress,format"
        />
        <meta
          property="instagram:image"
          content="https://images.prismic.io/portifolio-samuel-rms/112e8b0d-1dbe-4230-bd20-6ad656faed0f_ogimage.png?auto=compress,format"
        />
        <meta
          property="instagram:image:src"
          content="https://images.prismic.io/portifolio-samuel-rms/112e8b0d-1dbe-4230-bd20-6ad656faed0f_ogimage.png?auto=compress,format"
        />
        <meta
          name="description"
          content="Samuel Ramos, desenvolvedor FullStack, especializado em TypeScript e outras tecnologias modernas de desenvolvimento web. Com ampla experiência em desenvolvimento front-end e back-end, capaz de criar soluções elegantes e escaláveis para os desafios mais complexos de desenvolvimento. Tem compromisso com a excelência técnica e a inovação tornando-se um líder de pensamento no campo do desenvolvimento web. Descubra como as habilidades e a sua podem levar seu projeto de desenvolvimento web e mobile para o próximo nível."
        />
        <meta
          property="og:description"
          content="Samuel Ramos, desenvolvedor FullStack, especializado em TypeScript e outras tecnologias modernas de desenvolvimento web. Com ampla experiência em desenvolvimento front-end e back-end, capaz de criar soluções elegantes e escaláveis para os desafios mais complexos de desenvolvimento. Tem compromisso com a excelência técnica e a inovação tornando-se um líder de pensamento no campo do desenvolvimento web. Descubra como as habilidades e a sua podem levar seu projeto de desenvolvimento web e mobile para o próximo nível."
        />
        <meta name="author" content="Samuel Ramos" />

        <meta property="og:type" content="page" />
        <meta property="og:url" content="samuelramos.dev" />
        <meta
          property="og:title"
          content="Home | Portifólio Samuel Ramos - Full-Stack Developer"
        />
        <meta property="article:author" content="Samuel Ramos" />
      </Head>
      <main className="container">
        <HeroHome data={homeHero} />
        <Experiences experience={experience} />
        <Projects projects={projects} />
        <Guideline data={skills} />
        <Courses courses={courses} />
        <ContactForm isHome />
      </main>
    </HomeContainer>
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

  const about = (await projectResponse('about')).results.map(
    ({ data }) => data
  );

  const courses = (await projectResponse('courses')).results.map(res => ({
    route: res.uid,
    ...res.data
  }));

  return {
    props: {
      projects,
      homeHero,
      experience,
      skills,
      about,
      courses
    }
  };
};
