import { lighten } from 'polished';
import styled from 'styled-components';
import { NavLinkProps } from './NavLink.types';

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    text-transform: uppercase;
    color: ${props =>
      props.isActive ? props.theme.primary : props.theme.secondary};
    transition: 0.5s;
    font-weight: 700;

    &:hover {
      color: ${props =>
        props.isActive
          ? lighten(0.2, props.theme.primary)
          : lighten(0.2, props.theme.secondary)};
    }
  }
`;
