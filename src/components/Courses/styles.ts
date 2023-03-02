import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 5rem;
  align-items: center;

  > section {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 4rem;

    @media (max-width: 1000px) {
      gap: 2rem;
    }
  }

  a:first-child {
    margin: 0 auto 0 0;
    cursor: default;
  }

  a:not(:first-child) {
    color: ${({ theme }) => theme.background};
    text-transform: uppercase;

    > button {
      background: ${({ theme }) => theme.primary};
      padding: 0.8rem 3rem;
      border-radius: 0.5rem;
      border: none;
      transition: 0.5s;
      font-size: 1.5rem;

      &:hover {
        background: ${({ theme }) => darken(0.05, theme.primary)};
      }

      @media (max-width: 500px) {
        padding: 1rem;
        font-size: 1rem;
      }
    }
  }
`;
