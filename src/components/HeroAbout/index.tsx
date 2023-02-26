import { FC } from 'react';
import { Container } from './styles';
import { SectionTitle } from '../SectionTitle';
import { Props } from './HeroAbout.types';
import { AboutContainer } from '../AboutContainer';

export const HeroAbout: FC<Props> = ({ data }) => (
  <Container data-aos="fade-up">
    <SectionTitle title={data.about_me} description={data.name} />
    <AboutContainer data={data} />
  </Container>
);
