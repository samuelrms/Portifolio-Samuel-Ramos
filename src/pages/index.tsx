import { Experiences, Header, HeroHome } from '../components';
import { HomeContainer } from '../styles/HomeStyles';

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <HeroHome />
        <Experiences />
      </main>
    </HomeContainer>
  );
}
