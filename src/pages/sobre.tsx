import { GetStaticProps } from 'next';
import Head from 'next/head';
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
      <Head>
        <title>Sobre | Portifólio Samuel Ramos</title>
        <meta
          name="description"
          content="Formas de entrar em contato com Samuel Ramos, linkedIn, e-mail, GitHub, WhatsApp e formulário"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta property="instagram:image" content="/ogimage.png" />
        <meta property="instagram:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Formas de entrar em contato com Samuel Ramos, linkedIn, e-mail, GitHub, WhatsApp e formulário"
        />
      </Head>
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
