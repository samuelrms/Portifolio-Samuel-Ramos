import { Container, Input, TextArea } from './styles';

export const Form = () => (
  <Container>
    <Input placeholder="Nome" type="name" required />
    <Input placeholder="E-mail" type="email" required />
    <TextArea placeholder="Mensagem" required as="textarea" />
    <button type="submit">Enviar</button>
  </Container>
);
