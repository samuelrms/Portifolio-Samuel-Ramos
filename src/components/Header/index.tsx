import { NavLink } from '../NavLink';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projetos" includes />
        <NavLink title="Sobre" path="/sobre" />
      </ul>
    </Container>
  );
}
