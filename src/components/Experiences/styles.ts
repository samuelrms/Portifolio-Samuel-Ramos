import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  > a {
    cursor: default;
  }

  > section {
    flex-wrap: wrap;
    width: 100%;
    margin-top: 7rem;
    display: flex;
    gap: 1.5rem;

    padding-bottom: 8rem;

    @media (max-width: 1000px) {
      gap: 1rem;
    }

    @media (max-width: 700px) {
      flex-direction: column;
      margin-top: 5rem;
      gap: 2rem;
    }
  }

  .contentExperience {
    padding-bottom: 8rem;
    border-bottom: 3px solid ${({ theme }) => theme.primary};
    display: flex;
    justify-content: center;
    > a {
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
  }
`;
