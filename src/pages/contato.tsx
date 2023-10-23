import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { Contact, ContactForm } from '../components';
import { Container } from '../styles/ContactStyles';
import { projectResponse } from '../utils/getQueryPrismic';
import { Props } from '../types/Contact.types';

export default function Contato({ contact }: Props) {
  return (
    <Container>
      <Head>
        <meta charSet="utf-8" />
        <meta name="language" content="pt-BR" />
        <title> Contato | Portifólio Samuel Ramos - Full-Stack Developer</title>
        <meta name="robots" content="all" />
        <meta
          name="keywords"
          content="telefone-linkedIn-currículo-WhatsApp-email-github-instagram"
        />
        <meta
          property="og:image"
          content="https://images.prismic.io/portifolio-samuel-rms/7a414297-8505-4141-bec8-2c5125b8a6d4_contato.png?auto=compress,format"
        />
        <meta
          property="og:image:secure_url"
          content="https://images.prismic.io/portifolio-samuel-rms/7a414297-8505-4141-bec8-2c5125b8a6d4_contato.png?auto=compress,format"
        />
        <meta
          property="instagram:image"
          content="https://images.prismic.io/portifolio-samuel-rms/7a414297-8505-4141-bec8-2c5125b8a6d4_contato.png?auto=compress,format"
        />
        <meta
          property="instagram:image:src"
          content="https://images.prismic.io/portifolio-samuel-rms/7a414297-8505-4141-bec8-2c5125b8a6d4_contato.png?auto=compress,format"
        />
        <meta
          name="description"
          content="Você pode entrar em contato comigo pelo WhatsApp, conferir meu currículo Lattes, conhecer meu perfil profissional no LinkedIn, me enviar um e-mail ou verificar meus projetos no GitHub. Meu currículo também está disponível para download, e você pode me seguir no Instagram para saber mais sobre meu trabalho e interesses pessoais. Sempre aberto para novos desafios e oportunidades, e ficarei feliz em ouvir de você."
        />
        <meta
          property="og:description"
          content="Você pode entrar em contato comigo pelo WhatsApp, conferir meu currículo Lattes, conhecer meu perfil profissional no LinkedIn, me enviar um e-mail ou verificar meus projetos no GitHub. Meu currículo também está disponível para download, e você pode me seguir no Instagram para saber mais sobre meu trabalho e interesses pessoais. Sempre aberto para novos desafios e oportunidades, e ficarei feliz em ouvir de você."
        />
        <meta name="author" content="Samuel Ramos" />

        <meta property="og:type" content="page" />
        <meta property="og:url" content="samuelramos.dev/contato" />
        <meta
          property="og:title"
          content="Cursos | Portifólio Samuel Ramos - Full-Stack Developer"
        />
        <meta property="article:author" content="Samuel Ramos" />
      </Head>
      <main className="container">
        <Contact contact={contact} />
        <ContactForm />
      </main>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const contact = (await projectResponse('contact')).results.map(
    response => response.data
  );

  return {
    props: {
      contact: contact[0]
    }
  };
};
