import Head from 'next/head';
import { GetStaticProps } from 'next';
import { Contact, ContactForm } from '../components';
import { Container } from '../styles/ContactStyles';
import { projectResponse } from '../utils/getQueryPrismic';
import { Props } from '../types/Contact.types';

export default function Contato({ contact }: Props) {
  return (
    <Container>
      <Head>
        <title>Contato | Portifólio Samuel Ramos</title>
        <meta
          name="description"
          content="Você pode entrar em contato comigo pelo WhatsApp, conferir meu currículo Lattes, conhecer meu perfil profissional no LinkedIn, me enviar um e-mail ou verificar meus projetos no GitHub. Meu currículo também está disponível para download, e você pode me seguir no Instagram para saber mais sobre meu trabalho e interesses pessoais. Sempre aberto para novos desafios e oportunidades, e ficarei feliz em ouvir de você."
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta property="instagram:image" content="/ogimage.png" />
        <meta property="instagram:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Você pode entrar em contato comigo pelo WhatsApp, conferir meu currículo Lattes, conhecer meu perfil profissional no LinkedIn, me enviar um e-mail ou verificar meus projetos no GitHub. Meu currículo também está disponível para download, e você pode me seguir no Instagram para saber mais sobre meu trabalho e interesses pessoais. Sempre aberto para novos desafios e oportunidades, e ficarei feliz em ouvir de você."
        />
      </Head>
      <main className="container">
        <Contact contact={contact} />
        <ContactForm />
      </main>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const contact = (await projectResponse('contact')).results.map(
    response => response.data
  );

  return {
    props: {
      contact: contact[0]
    }
  };
};
