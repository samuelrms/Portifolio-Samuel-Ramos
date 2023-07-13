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
        <meta charSet="utf-8" />
        <meta name="language" content="pt-BR" />
        <title> Sobre | Portifólio Samuel Ramos - Full-Stack Developer</title>
        <meta name="robots" content="all" />
        <meta
          name="keywords"
          content="informações-sobre-pessoal-curiosidades-experiencia-resumo-qualidades"
        />
        <meta
          property="og:image"
          content="https://images.prismic.io/portifolio-samuel-rms/187079e8-de42-44ed-8502-2a26e4baf492_Captura+de+tela+2023-07-13+143848.png?auto=compress,format"
        />
        <meta
          property="og:image:secure_url"
          content="https://images.prismic.io/portifolio-samuel-rms/187079e8-de42-44ed-8502-2a26e4baf492_Captura+de+tela+2023-07-13+143848.png?auto=compress,format"
        />
        <meta
          property="instagram:image"
          content="https://images.prismic.io/portifolio-samuel-rms/187079e8-de42-44ed-8502-2a26e4baf492_Captura+de+tela+2023-07-13+143848.png?auto=compress,format"
        />
        <meta
          property="instagram:image:src"
          content="https://images.prismic.io/portifolio-samuel-rms/187079e8-de42-44ed-8502-2a26e4baf492_Captura+de+tela+2023-07-13+143848.png?auto=compress,format"
        />
        <meta
          name="description"
          content="Samuel Ramos, desenvolvedor FullStack experiente, com conhecimentos em TypeScript e uma ampla gama de tecnologias de desenvolvimento web. Com habilidades em desenvolvimento front-end e back-end, Samuel é capaz de criar aplicativos web escaláveis e de alta performance, com atenção aos detalhes e às melhores práticas de desenvolvimento. Sua paixão pela tecnologia e seu compromisso em melhorar constantemente seus conhecimentos o tornam um membro valioso da equipe de desenvolvimento"
        />
        <meta
          property="og:description"
          content="Samuel Ramos, desenvolvedor FullStack experiente, com conhecimentos em TypeScript e uma ampla gama de tecnologias de desenvolvimento web. Com habilidades em desenvolvimento front-end e back-end, Samuel é capaz de criar aplicativos web escaláveis e de alta performance, com atenção aos detalhes e às melhores práticas de desenvolvimento. Sua paixão pela tecnologia e seu compromisso em melhorar constantemente seus conhecimentos o tornam um membro valioso da equipe de desenvolvimento"
        />
        <meta name="author" content="Samuel Ramos" />

        <meta property="og:type" content="page" />
        <meta property="og:url" content="samuelramos.dev/sobre" />
        <meta
          property="og:title"
          content="Cursos | Portifólio Samuel Ramos - Full-Stack Developer"
        />
        <meta property="article:author" content="Samuel Ramos" />
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
