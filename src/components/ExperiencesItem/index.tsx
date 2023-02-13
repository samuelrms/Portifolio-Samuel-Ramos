import { FC } from 'react';
import { Props } from './ExperiencesItem.types';
import { Container } from './styles';

export const ExperiencesItem: FC<Props> = ({ description, title, year }) => (
  <Container>
    <div>
      <h1>{year}</h1>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </Container>
);
