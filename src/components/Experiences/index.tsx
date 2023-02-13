import { ExperiencesItem } from '../ExperiencesItem';
import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';

export const Experiences = () => (
  <Container>
    <SectionTitle title="01 Ano" description="de experiência" />
    <section>
      <ExperiencesItem
        year={2021}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatum similique saepe ut ratione cumque obcaecati."
        title="Dev Front-end"
      />
      <ExperiencesItem
        year={2021}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatum similique saepe ut ratione cumque obcaecati."
        title="Dev Front-end"
      />
      <ExperiencesItem
        year={2021}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatum similique saepe ut ratione cumque obcaecati."
        title="Dev Front-end"
      />
      <ExperiencesItem
        year={2021}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatum similique saepe ut ratione cumque obcaecati."
        title="Dev Front-end"
      />
    </section>
  </Container>
);
