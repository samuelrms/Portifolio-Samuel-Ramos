import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { GuidelineItem } from '../GuidelineItem';
import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';

export const Guideline = () => (
  <Container>
    <SectionTitle title="Conhecimentos" />
    <section>
      <GuidelineItem title="HTML" icon={<AiFillHtml5 />} />
      <GuidelineItem title="CSS" icon={<FaCss3Alt />} />
      <GuidelineItem title="Javascript" icon={<IoLogoJavascript />} />
      <GuidelineItem title="React" icon={<FaReact />} />
    </section>
  </Container>
);
