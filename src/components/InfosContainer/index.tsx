import React from 'react';
import { CodeItem, Container } from './styles';

export const InfosContainer = () => (
  <Container>
    <CodeItem>
      <span className="comment">//Minha apresentação</span>
      <span className="purple">Infos</span>
      {/* Utilização de unicode para chaves abrindo */}
      {'\u007b'}
      <div>
        Nome: <span className="blue">Samuel,</span>
      </div>
      <div>
        Sobrenome: <span className="blue">Ramos</span>
      </div>
      {/* Utilização de unicode para chaves abrindo */}
      {'\u007D'}
    </CodeItem>
    <CodeItem>
      <span className="purple">Area</span>
      {/* Utilização de unicode para chaves abrindo */}
      {'\u007b'}
      <div>
        Função: <span className="blue">Dev Front-end,</span>
      </div>
      <div>
        Nível: <span className="blue">Pleno</span>
      </div>
      {/* Utilização de unicode para chaves abrindo */}
      {'\u007D'}
    </CodeItem>
  </Container>
);
