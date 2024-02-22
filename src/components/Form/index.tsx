import { useState } from 'react';
import { toast } from 'react-hot-toast';
import emailjs from 'emailjs-com';

import { useTheme } from 'styled-components';
import { Container } from './styles';
import { maskOnlyLetters, maskPhone } from '../../utils/mask';
import { Input } from '../Input';
import { TextArea } from '../TextArea';

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
          color: theme.white
        }
      });
      return;
    }

    try {
      setLoading(true);

      setName('');
      setEmail('');
      setMensagem('');
      setPhone('');

      toast.promise(
        emailjs
          .sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            e.target,
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
          )
          .then(),
        {
          loading: 'Enviando email...',
          success: 'Mensagem enviada com sucesso!',
          error: 'Erro ao enviar email'
        },
        {
          style: {
            background: theme.primary,
            color: theme.white
          }
        }
      );
    } catch (error) {
      toast('Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!', {
        style: {
          background: theme.error,
          color: theme.white
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
        name="massage"
        value={mensagem}
        as="textarea"
        onChange={({ target }) => setMensagem(target.value)}
      />
      <button type="submit" disabled={loading} aria-label="Envie sua mensagem">
        ENVIAR
      </button>
    </Container>
  );
};
