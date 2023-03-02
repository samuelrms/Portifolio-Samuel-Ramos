import Link from 'next/link';
import { Form } from '../Form';
import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';

export const ContactForm = () => (
  <Container>
    <div />
    <Link href="#contato" scroll={false}>
      <SectionTitle
        id="contato"
        title={
          <>
            Precisa dos <br /> meus serviços?
          </>
        }
        description={
          <>
            Preencha o formulário abaixo que <br /> irei retornar em breve
          </>
        }
      />
    </Link>
    <Form />
  </Container>
);
