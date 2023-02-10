import Link from 'next/link';
import { FC } from 'react';
import { Props } from './NavLink.types';

import { NavLinkContainer } from './styles';

export const NavLink: FC<Props> = ({ title, path }) => (
  <NavLinkContainer>
    <Link href={path}>
      <a>{title}</a>
    </Link>
  </NavLinkContainer>
);
