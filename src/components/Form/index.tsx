import { useState } from 'react';
import { toast } from 'react-hot-toast';
import emailjs from 'emailjs-com';

import { useTheme } from 'styled-components';
import { Container, Input, TextArea } from './styles';
import { maskOnlyLetters, maskPhone } from '../../utils/mask';

export const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [phone, setPhone] = useState('');

  const [loading, setLoading] = useState(false);

  const theme = useTheme();

  function sendEmail(e) {
    e.preventDefault();

    if (loading) return;

    if (!name.trim() || !email.trim() || !mensagem.trim()) {
      toast('Preencha todos os campos para enviar sua mensagem!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
      return;
    }

    try {
      setLoading(true);
      emailjs
        .sendForm('gmail', 'contact-portifolio', e.target, 'aQZ_-tHoFflFCvWRE')
        .then(
          () => {},
          error => console.log(error.text)
        );
      setName('');
      setEmail('');
      setMensagem('');
      setPhone('');

      toast('Mensagem enviada com sucesso!', {
        style: {
          background: theme.primary,
          color: '#fff'
        }
      });
    } catch (error) {
      toast('Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container data-aos="fade-up" onSubmit={sendEmail}>
      <Input
        placeholder="Nome"
        value={name}
        name="name"
        type="name"
        className="name"
        onChange={({ target }) => setName(maskOnlyLetters(target.value))}
      />
      <Input
        placeholder="E-mail"
        type="email"
        name="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <Input
        placeholder="Telefone"
        type="phone"
        name="phone"
        value={phone}
        onChange={({ target }) => setPhone(maskPhone(target.value))}
      />
      <TextArea
        placeholder="Mensagem"
        name="content"
        value={mensagem}
        onChange={({ target }) => setMensagem(target.value)}
      />
      <button type="submit" disabled={loading}>
        ENVIAR
      </button>
    </Container>
  );
};
