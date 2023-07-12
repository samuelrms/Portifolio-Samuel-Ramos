import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { HeroAbout } from '../components/HeroAbout';
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
          content="Samuel Ramos, desenvolvedor FullStack experiente, com conhecimentos em TypeScript e uma ampla gama de tecnologias de desenvolvimento web. Com habilidades em desenvolvimento front-end e back-end, Samuel é capaz de criar aplicativos web escaláveis e de alta performance, com atenção aos detalhes e às melhores práticas de desenvolvimento. Sua paixão pela tecnologia e seu compromisso em melhorar constantemente seus conhecimentos o tornam um membro valioso da equipe de desenvolvimento"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta property="instagram:image" content="/ogimage.png" />
        <meta property="instagram:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Samuel Ramos, desenvolvedor FullStack experiente, com conhecimentos em TypeScript e uma ampla gama de tecnologias de desenvolvimento web. Com habilidades em desenvolvimento front-end e back-end, Samuel é capaz de criar aplicativos web escaláveis e de alta performance, com atenção aos detalhes e às melhores práticas de desenvolvimento. Sua paixão pela tecnologia e seu compromisso em melhorar constantemente seus conhecimentos o tornam um membro valioso da equipe de desenvolvimento"
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
    }
  };
};
