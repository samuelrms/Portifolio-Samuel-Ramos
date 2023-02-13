import {
  ContactForm,
  Experiences,
  Guideline,
  Header,
  HeroHome,
  Projects
} from '../components';
import { HomeContainer } from '../styles/HomeStyles';

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <HeroHome />
        <Experiences />
        <Projects />
        <Guideline />
        <ContactForm />
      </main>
    </HomeContainer>
  );
}
