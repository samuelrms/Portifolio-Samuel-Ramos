import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { Props } from './NavLink.types';

import { NavLinkContainer } from './styles';

export const NavLink: FC<Props> = ({ title, path }) => {
  const router = useRouter();

  const isActive = router.pathname === path;

  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </NavLinkContainer>
  );
};
