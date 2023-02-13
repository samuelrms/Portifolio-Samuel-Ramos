import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';

export const ContactForm = () => (
  <Container>
    <SectionTitle
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
  </Container>
);
