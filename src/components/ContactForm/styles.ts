import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  .contentRoute {
    padding-top: 4rem;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 1000px) {
      padding-top: 2rem;
    }

    @media (max-width: 450px) {
      justify-content: flex-start;

      > a button {
        padding: 0.8rem 1.5rem;
        font-size: 1rem;
      }
    }
  }

  a {
    cursor: default;

    > button {
      border: none;
      padding: 1rem 2.5rem;
      color: ${({ theme }) => theme.white};
      font-size: 1.2rem;
      border-radius: 0.5rem;
      background: ${({ theme }) => theme.primary};
      transition: 0.5s;
      width: fit-content;
      color: ${({ theme }) => theme.background};

      &:hover {
        background: ${({ theme }) => darken(0.05, theme.primary)};
      }
    }
  }
`;
