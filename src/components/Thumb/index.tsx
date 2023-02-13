import { FC } from 'react';

import { Container } from './styles';
import { Props } from './Thumb.types';

export const Thumb: FC<Props> = ({ imgURL, title, type }) => (
  <Container imgURL={imgURL}>
    <div className="overlay" />
    <section>
      <h1>{title}</h1>
      <h2>{type}</h2>
    </section>
  </Container>
);
