import Link from 'next/link';
import { Form } from '../Form';
import { SectionTitle } from '../SectionTitle';
import { IsHome } from './ContactForm.types';
import { Container } from './styles';

export const ContactForm = ({ isHome = false }: IsHome) => (
  <Container>
    <Link href="#contato" aria-label="Redirecionamento para seção de contato">
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
    {isHome && (
      <div className="contentRoute">
        <Link
          href="/contato"
          aria-label="Redirecionamento para pagina de contatos"
        >
          <button type="button">Outras formas de contato</button>
        </Link>
      </div>
    )}
  </Container>
);
