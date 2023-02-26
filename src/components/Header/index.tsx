import { DropdownMenu } from '../DropdownMenu';
import { NavLink } from '../NavLink';
import { routes } from '../Routes';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <ul>
        {routes.map(data => (
          <NavLink
            key={data.path}
            title={data.title}
            path={data.path}
            includes={data.includes}
          />
        ))}
      </ul>
      <DropdownMenu />
    </Container>
  );
}
