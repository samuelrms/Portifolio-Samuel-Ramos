import { FC } from 'react';
import Link from 'next/link';
import { icons } from '../../constants/iconsSkills';
import { GuidelineItem } from '../GuidelineItem';
import { SectionTitle } from '../SectionTitle';
import { Props } from './Guideline.types';
import { Container } from './styles';

export const Guideline: FC<Props> = ({ data }) => {
  const guideLine = data[0];

  return (
    <Container>
      <Link
        href="#conhecimentos"
        aria-label="Redirecionamento para seção de conhecimentos"
      >
        <SectionTitle id="conhecimentos" title={guideLine.skillsTitle} />
      </Link>
      <section>
        {guideLine.skills.map((value: { name_skill: string }, i: number) => (
          <GuidelineItem
            key={value.name_skill}
            title={value.name_skill}
            icon={icons[i].icon}
          />
        ))}
      </section>
    </Container>
  );
};
