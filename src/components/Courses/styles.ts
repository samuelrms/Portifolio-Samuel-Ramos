import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  > section {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 4rem;

    @media (max-width: 1000px) {
      gap: 2rem;
    }
  }

  > button {
    background: ${({ theme }) => theme.primary};
    padding: 0.8rem 3rem;
    border-radius: 0.5rem;
    border: none;
    transition: 0.5s;

    &:hover {
      background: ${({ theme }) => darken(0.05, theme.primary)};
    }

    a {
      color: ${({ theme }) => theme.background};
      text-transform: uppercase;
      font-size: 1.5rem;
    }

    @media (max-width: 500px) {
      padding: 1rem;
      a {
        font-size: 1rem;
      }
    }
  }
`;
