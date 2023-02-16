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
`;

export const CodeItem = styled.pre`
  background: ${({ theme }) => theme.gradient};
  padding: 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 300;
  color: #fff;
  width: 30rem;
  align-self: flex-start;
  transition: 1s !important;

  @media (max-width: 1450px) {
    width: 22rem;
    padding: 1.5rem;
    font-size: 0.8rem;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 425px) {
    padding: 1rem;
  }

  &:hover {
    filter: brightness(1.2);
  }

  &:nth-child(even) {
    align-self: flex-end;
  }

  > div {
    margin: 0.2rem 0;
    margin-left: 1rem;

    @media (max-width: 425px) {
      display: flex;
      flex-wrap: wrap;
    }
  }

  span.purple {
    color: #c38cdd;
  }

  span.blue {
    color: #7ac7e3;
  }

  span.comment {
    color: ${({ theme }) => theme.text};
    margin-bottom: 1rem;
    display: block;
  }
`;
