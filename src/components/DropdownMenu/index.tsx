import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { useTheme } from 'styled-components';
import { Sling as Hamburger } from 'hamburger-react';
import { Container, Divider, StyledContent, StyledItem } from './styles';
import { NavLink } from '../NavLink';
import { routes } from '../Routes';

export const DropdownMenu = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(!isOpen);

  const theme = useTheme();
  return (
    <Container>
      <RadixDropdownMenu.Root
        modal={false}
        onOpenChange={handleOpen}
        open={isOpen}
      >
        <RadixDropdownMenu.Trigger>
          <Hamburger color={theme.primary} toggled={isOpen} />
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
