import { FC } from 'react';
import { Props } from './SectionTitle.types';

import { Container } from './styles';

export const SectionTitle: FC<Props> = ({ title, description, ...props }) => (
  <Container data-aos="fade-right">
    <h1 {...props}>#{title}</h1>
    {description && <h2>{description}</h2>}
  </Container>
);
