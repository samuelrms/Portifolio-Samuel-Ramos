import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';

import {
  ContactForm,
  Experiences,
  Footer,
  Guideline,
  Header,
  HeroHome,
  Projects
} from '../components';
import { getPrismicClient } from '../services/prismic';
import { HomeContainer } from '../styles/HomeStyles';
import { day } from '../constants';
import { PropsProjectArr } from '../types';

export default function Home({ projects }: PropsProjectArr) {
  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <HeroHome />
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
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projects')],
    { orderings: '[document.first_publication_data desc]' }
  );

  const projects = projectResponse.results.map(project => ({
    slug: project.uid,
    title: project.data.title,
    type: project.data.type,
    description: project.data.description,
    link: project.data.project_link.url,
    thumb: project.data.thumb.url
  }));

  return {
    props: {
      projects
    },
    revalidate: day
  };
};
