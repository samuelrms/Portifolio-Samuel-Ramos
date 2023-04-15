import styled from 'styled-components';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  backdrop-filter: blur(13px) saturate(100%);
  background-color: rgba(122, 199, 227, 0);
  position: fixed;
  z-index: 99;

  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  .contentDropdownMenu {
    display: none;
  }

  .logo {
    display: none;
    cursor: pointer;
  }

  @media (max-width: 786px) {
    justify-content: flex-end;
    padding-right: 2rem;

    ul {
      display: none;
    }

    button {
      background: transparent;
      border: none;
    }

    .contentDropdownMenu {
      display: block;
    }

    .logo {
      display: block;
    }
  }
`;

export const StyledContent = styled(DropdownMenu.Content)`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.white};
  padding: 0 12px 48px;
  list-style: none;
  background: ${({ theme }) => theme.gradient};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-top: -54px;
`;

export const StyledItem = styled(DropdownMenu.Item)``;
