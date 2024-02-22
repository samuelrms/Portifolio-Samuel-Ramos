import { darken, lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > main {
    margin: 2rem 0;
    width: 100%;
    padding: 0 5rem;

    p,
    h2 {
      color: ${({ theme }) => theme.textLight};
      font-size: 1.5rem;
      font-weight: 300;
      padding-bottom: 16px;
    }

    h2 {
      font-size: 2rem;
      font-weight: 500;
      color: ${({ theme }) => theme.primary};
    }

    p {
      padding-bottom: 2rem;
    }

    a {
      color: ${({ theme }) => theme.background};
      text-transform: uppercase;
      font-weight: 500;

      button {
        font-size: 1.5rem;
        background: ${({ theme }) => theme.primary};
        padding: 0.8rem 3rem;
        border-radius: 0.5rem;
        border: none;
        transition: 0.5s;
        margin-top: 2rem;

        &:hover {
          background: ${({ theme }) => darken(0.05, theme.primary)};
        }
      }
    }

    div p {
      width: fit-content;
      border-bottom: 3px solid ${({ theme }) => theme.primary};
      margin-bottom: 32px;
      padding-bottom: 2px;
      font-weight: 500;
    }

    @media (max-width: 700px) {
      padding: 0 2.5rem;

      p {
        font-size: 1rem;
      }

      button {
        padding: 0.7rem 2rem;

        a {
          font-size: 0.9rem;
        }
      }
    }
  }

  .contentAction {
    padding-top: 8rem;
    display: flex;
    justify-content: space-evenly;
    > a {
      color: ${({ theme }) => theme.background};
      text-transform: uppercase;

      button {
        background: ${({ theme }) => theme.primary};
        padding: 0.8rem 3rem;
        border-radius: 0.5rem;
        border: none;
        transition: 0.5s;
        font-size: 1.5rem;
        min-width: 250px;

        &:hover {
          background: ${({ theme }) => darken(0.05, theme.primary)};
        }

        @media (max-width: 500px) {
          padding: 1rem;
          font-size: 1rem;
        }
      }
    }

    .backPage {
      button {
        color: ${({ theme }) => theme.background};
        background: ${({ theme }) => theme.white};
        &:hover {
          background: ${({ theme }) => lighten(0.05, theme.secondary)};
        }
      }
    }
  }
`;
