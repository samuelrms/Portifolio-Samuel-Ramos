import { DropdownMenu } from '../DropdownMenu';
import { NavLink } from '../NavLink';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <ul hidden>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projetos" includes />
        <NavLink title="Sobre" path="/sobre" />
        <NavLink title="Cursos" path="/cursos" includes />
      </ul>
      <DropdownMenu />
    </Container>
  );
}
