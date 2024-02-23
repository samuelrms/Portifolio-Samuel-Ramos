import Link from 'next/link';
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
        {data.work_experience
          .slice(0, 3)
          .map(
            ({
              description_function,
              entry_year,
              exit_year,
              function: title,
              link
            }: WorkExperience) => (
              <ExperiencesItem
                key={exit_year}
                yearEntry={entry_year}
                yearExit={exit_year}
                description={description_function}
                title={title}
                href={`/experiencia/${link}`}
              />
            )
          )}
      </section>
      <div className="contentExperience">
        <Link
          href="/experiencia"
          aria-label="Redirecionamento para pagina de experiência"
        >
          <button
            type="button"
            aria-label="Redirecionamento para ver todas as experiências"
          >
            Todas as experiências
          </button>
        </Link>
      </div>
    </Container>
  );
};
