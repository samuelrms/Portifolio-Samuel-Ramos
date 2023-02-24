import styled from 'styled-components';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export const Container = styled.div`
  display: none;
  @media (max-width: 786px) {
    display: block;
  }
`;

export const StyledContent = styled(DropdownMenu.Content)`
  width: 100vw;
  height: 100vh;
  background: #fff;
  padding: 48px 12px;
  list-style: none;
  background: ${({ theme }) => theme.gradient};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-top: -54px;
  z-index: 3;
`;

export const StyledItem = styled(DropdownMenu.Item)``;

export const Divider = styled(DropdownMenu.Separator)`
  background: ${({ theme }) => theme.secondary};
  width: 8px;
  height: 8px;
  border-radius: 50%;
`;
