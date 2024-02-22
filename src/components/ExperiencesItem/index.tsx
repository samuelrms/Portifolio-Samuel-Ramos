import { FC } from 'react';
import { Props } from './ExperiencesItem.types';
import { Container } from './styles';

export const ExperiencesItem: FC<Props> = ({
  description,
  title,
  yearEntry,
  yearExit,
  href
}) => (
  <Container href={href} data-aos="fade-up">
    <div>
      <h1>
        {yearEntry} - {yearExit}
      </h1>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </Container>
);
