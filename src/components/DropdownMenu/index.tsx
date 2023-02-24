import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { useTheme } from 'styled-components';
import { Sling as Hamburger } from 'hamburger-react';
import { Container, Divider, StyledContent, StyledItem } from './styles';
import { NavLink } from '../NavLink';

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
            <StyledItem>
              <NavLink onClick={handleOpen} title="Home" path="/" />
            </StyledItem>
            <Divider />
            <StyledItem>
              <NavLink
                onClick={handleOpen}
                title="Projetos"
                path="/projetos"
                includes
              />
            </StyledItem>
            <Divider />
            <StyledItem>
              <NavLink onClick={handleOpen} title="Sobre" path="/sobre" />
            </StyledItem>
            <Divider />
            <StyledItem>
              <NavLink title="Cursos" path="/cursos" includes />
            </StyledItem>
          </StyledContent>
        </RadixDropdownMenu.Portal>
      </RadixDropdownMenu.Root>
    </Container>
  );
};
