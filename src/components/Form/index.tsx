import { FormEvent, useState } from 'react';
import { sendContactMail } from '../../services/sandMail';
import { Container, Input, TextArea } from './styles';

export const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [massage, setMassage] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await sendContactMail(name, email, massage);
  };

  return (
    <Container data-aos="fade-up" onSubmit={handleSubmit}>
      <Input
        onChange={({ target }) => setName(target.value)}
        placeholder="Nome"
        value={name}
        type="name"
        required
      />
      <Input
        placeholder="E-mail"
        onChange={({ target }) => setEmail(target.value)}
        value={email}
        type="email"
        required
      />
      <TextArea
        onChange={({ target }) => setMassage(target.value)}
        placeholder="Mensagem"
        value={massage}
        as="textarea"
        required
      />
      <button type="submit">Enviar</button>
    </Container>
  );
};
