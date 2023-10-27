import React, { useState } from 'react';
import { BiCopy } from 'react-icons/bi';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useTheme } from 'styled-components';
import { Container } from './styles';
import { Tooltip } from '../Tooltip';

export const CopyableCodeBlock = ({ content }: { content: string }) => {
  const [copied, setCopied] = useState(false);

  const theme = useTheme();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
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
            <BiCopy onClick={copyToClipboard} size={20} />
          ) : (
            <AiOutlineCheckCircle size={20} color={theme.primary} />
          )}
        </div>
      </Tooltip>
    </Container>
  );
};
