import Link from 'next/link';
import { FC } from 'react';
import { icons } from '../../constants/iconsSkills';
import { GuidelineItem } from '../GuidelineItem';
import { SectionTitle } from '../SectionTitle';
import { Props } from './Guideline.types';
import { Container } from './styles';

export const Guideline: FC<Props> = ({ data, count }) => {
  const guideLine = data[0];

  return (
    <Container count={count}>
      <Link
        href="#conhecimentos"
        aria-label="Redirecionamento para seção de conhecimentos"
      >
        <SectionTitle id="conhecimentos" title={guideLine.skillsTitle} />
      </Link>
      <section>
        {guideLine.skills
          .slice(0, count)
          .map((value: { name_skill: string }, i: number) => (
            <GuidelineItem
              key={value.name_skill}
              title={value.name_skill}
              icon={icons[i].icon}
              href={icons[i].documentation}
            />
          ))}
      </section>
      {count > 1 && (
        <div className="contentExperience">
          <Link
            href="/sobre#conhecimentos"
            aria-label="Redirecionamento para pagina de sobre"
          >
            <button
              type="button"
              aria-label="Redirecionamento para ver todas os conhecimentos"
            >
              Todas os conhecimentos
            </button>
          </Link>
        </div>
      )}
    </Container>
  );
};
