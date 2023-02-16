import { GetStaticProps } from 'next';
import React from 'react';
import { HeroAbout } from '../components/HeroAbout';
import { hour } from '../constants';
import { AboutContainer } from '../styles/AboutStyles';
import { About, Props } from '../types/About.types';
import { projectResponse } from '../utils/getQueryPrismic';

const Sobre = ({ about }: Props) => {
  const value: About = about[0];
  return (
    <AboutContainer>
      <main className="container">
        <HeroAbout data={value} />
      </main>
    </AboutContainer>
  );
};

export default Sobre;

export const getStaticProps: GetStaticProps = async () => {
  const about = (await projectResponse('about')).results.map(
    response => response.data
  );

  return {
    props: {
      about
    },
    revalidate: hour
  };
};
