import { FC } from 'react';
import { icons } from '../../constants/iconsSkills';
import { GuidelineItem } from '../GuidelineItem';
import { SectionTitle } from '../SectionTitle';
import { Props } from './Guideline.types';
import { Container } from './styles';

export const Guideline: FC<Props> = ({ data }) => {
  const getArr = data[0];

  return (
    <Container>
      <SectionTitle title={getArr.skillsTitle} />
      <section>
        {getArr.skills.map((value: { name_skill: string }, i: number) => (
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
