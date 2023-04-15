import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > div {
    display: flex;
    justify-content: center;
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
  }

  .presentation {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .contentTop {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    margin: 3rem 0 6rem;

    @media (max-width: 700px) {
      display: flex;
      flex-wrap: wrap-reverse;
    }

    > div:last-child {
      width: 100%;
      margin: auto;
    }
  }
`;

export const CodeItem = styled.div`
  background: ${({ theme }) => theme.gradient};
  padding: 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 300;
  color: ${({ theme }) => theme.white};
  align-self: flex-start;
  transition: 1s !important;
  flex-direction: column;
  border-radius: 8px;

  @media (max-width: 1450px) {
    padding: 1.5rem;
    font-size: 1.3rem;
  }

  @media (max-width: 1000px) {
    width: 100%;
    font-size: 1rem;
  }

  @media (max-width: 425px) {
    padding: 1rem;
    font-size: 0.8rem;
  }

  &:hover {
    filter: brightness(1.2);
  }

  > div {
    margin: 0.2rem 2rem;

    > p {
      text-align: justify;

      @media (max-width: 335px) {
        text-align: left;
      }
    }

    @media (max-width: 425px) {
      display: flex;
      flex-wrap: wrap;
    }
  }

  > div:first-child {
    margin-left: 1rem;
  }

  > div + div {
    margin-bottom: 0.8rem;
  }
`;

export const ContentImage = styled.div`
  width: 50%;
  > img {
    width: 20rem;
    flex: 1;
    border-radius: 100%;
  }
`;
