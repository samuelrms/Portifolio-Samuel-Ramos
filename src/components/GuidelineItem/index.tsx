import { FC } from 'react';
import { Props } from './GuidelineItem.types';
import { Container } from './styles';

export const GuidelineItem: FC<Props> = ({ title, icon }) => (
  <Container data-aos="fade-up">
    <p>{title}</p>
    {icon}
  </Container>
);
