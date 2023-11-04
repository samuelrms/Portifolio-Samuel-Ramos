import { FC } from 'react';
import { Props } from './GuidelineItem.types';
import { Container } from './styles';

export const GuidelineItem: FC<Props> = ({ title, icon, href }) => (
  <Container data-aos="fade-up" href={href} target="_blank">
    <p>{title}</p>
    {icon}
  </Container>
);
