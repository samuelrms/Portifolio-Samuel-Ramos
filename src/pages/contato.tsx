import Head from 'next/head';
import { GetStaticProps } from 'next';
import { Contact, ContactForm } from '../components';
import { hour } from '../constants';
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
    },
    revalidate: hour
  };
};
