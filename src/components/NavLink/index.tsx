import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { Props } from './NavLink.types';

import { NavLinkContainer } from './styles';

export const NavLink: FC<Props> = ({ title, path, includes }) => {
  const router = useRouter();

  const verifyIsActive = () => {
    if (includes) return router.pathname.includes(path);

    return path === router.pathname;
  };

  const isActive = verifyIsActive();

  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path}>{title}</Link>
    </NavLinkContainer>
  );
};
