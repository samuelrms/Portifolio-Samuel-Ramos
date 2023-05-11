import { darken } from 'polished';
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

    p {
      color: ${({ theme }) => theme.textLight};
      font-size: 1.5rem;
      font-weight: 300;
      text-align: justify;
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
`;
