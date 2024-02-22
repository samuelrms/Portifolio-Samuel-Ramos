import React, { useState } from 'react';
import { BiCopy } from 'react-icons/bi';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useTheme } from 'styled-components';
import toast from 'react-hot-toast';
import { Container } from './styles';
import { Tooltip } from '../Tooltip';

export const CopyableCodeBlock = ({ content }: { content: string }) => {
  const [copied, setCopied] = useState(false);

  const theme = useTheme();

  const copyToClipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(content)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        })
        .catch(() => {
          toast.error('Erro ao copiar para a área de transferência!');
        });
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = content;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }

    toast.success('Copiado para a área de transferência!', {
      style: {
        background: theme.primary,
        color: theme.background,
        fontWeight: 'bold'
      }
    });
  };

  return (
    <Container>
      <pre>
        <code>{content}</code>
      </pre>
      <Tooltip arrow tooltip={copied ? 'Copiado!' : 'Copiar'}>
        <div>
          {!copied ? (
            <BiCopy
              onClick={copyToClipboard}
              size={28}
              style={{ cursor: 'pointer' }}
            />
          ) : (
            <AiOutlineCheckCircle
              size={28}
              color={theme.primary}
              style={{ cursor: 'pointer' }}
            />
          )}
        </div>
      </Tooltip>
    </Container>
  );
};
