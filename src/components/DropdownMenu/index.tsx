import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'styled-components';
import { Sling as Hamburger } from 'hamburger-react';
import { Container, Divider, StyledContent, StyledItem } from './styles';
import { NavLink } from '../NavLink';
import { routes } from '../Routes';
import { LogoSVG } from '../Header/Logo';

export const DropdownMenu = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(!isOpen);

  const theme = useTheme();
  return (
    <Container>
      <Link href="/" aria-label="Redirecionamento para pagina principal">
        <LogoSVG className="logo" stroke={theme.primary} />
      </Link>
      <RadixDropdownMenu.Root
        modal={false}
        onOpenChange={handleOpen}
        open={isOpen}
      >
        <RadixDropdownMenu.Trigger aria-label="Abrir menu Hamburger">
          <Hamburger
            color={theme.primary}
            toggled={isOpen}
            label="Menu Hamburger"
          />
        </RadixDropdownMenu.Trigger>
        <RadixDropdownMenu.Portal>
          <StyledContent>
            {routes.map((data, i) => (
              <>
                <StyledItem key={data.path}>
                  <NavLink
                    onClick={handleOpen}
                    title={data.title}
                    path={data.path}
                    includes={data.includes}
                  />
                </StyledItem>
                {i + 1 < routes.length && <Divider />}
              </>
            ))}
          </StyledContent>
        </RadixDropdownMenu.Portal>
      </RadixDropdownMenu.Root>
    </Container>
  );
};
