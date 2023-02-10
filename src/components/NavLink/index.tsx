import Link from 'next/link';

import { NavLinkContainer } from './styles';

export const NavLink = () => (
  <NavLinkContainer>
    <Link href="/">
      <a>a</a>
    </Link>
  </NavLinkContainer>
);
