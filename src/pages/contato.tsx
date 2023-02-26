import Head from 'next/head';
import { Contact, ContactForm } from '../components';
import { Container } from '../styles/ContactStyles';

export default function Contato() {
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
        <Contact />
        <ContactForm />
      </main>
    </Container>
  );
}
