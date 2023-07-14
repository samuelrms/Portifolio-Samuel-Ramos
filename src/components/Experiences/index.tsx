import { FC } from 'react';
import Link from 'next/link';
import { WorkExperience } from '../../types/Home.types';
import { ExperiencesItem } from '../ExperiencesItem';
import { SectionTitle } from '../SectionTitle';
import { Props } from './Experiences.types';
import { Container } from './styles';

export const Experiences: FC<Props> = ({ experience }) => {
  const data = experience[0];

  return (
    <Container>
      <Link
        href="#experiencias"
        aria-label="Redirecionamento para seção de experiencias"
      >
        <SectionTitle
          id="experiencias"
          title={data.title}
          description={data.subtitle}
        />
      </Link>
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
