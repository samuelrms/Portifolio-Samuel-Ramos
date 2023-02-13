import { Experiences, Header, HeroHome, Projects } from '../components';
import { HomeContainer } from '../styles/HomeStyles';

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <HeroHome />
        <Experiences />
        <Projects />
      </main>
    </HomeContainer>
  );
}
