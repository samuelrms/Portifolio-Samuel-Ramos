import { FC } from 'react';
import { WorkExperience } from '../../types/Home.types';
import { ExperiencesItem } from '../ExperiencesItem';
import { SectionTitle } from '../SectionTitle';
import { Props } from './Experiences.types';
import { Container } from './styles';

export const Experiences: FC<Props> = ({ experience }) => {
  const data = experience[0];

  return (
    <Container>
      <SectionTitle title={data.title} description={data.subtitle} />
      <section>
        {data.work_experience.map(
          ({
            description_function,
            entry_year,
            exit_year,
            function: title
          }: WorkExperience) => (
            <ExperiencesItem
              key={exit_year}
              yearEntry={entry_year}
              yearExit={exit_year}
              description={description_function}
              title={title}
            />
          )
        )}
      </section>
    </Container>
  );
};
