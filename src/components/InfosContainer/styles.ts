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

    a {
      color: ${({ theme }) => theme.background};
      text-transform: uppercase;

      > button {
        font-size: 1.5rem;
        background: ${({ theme }) => theme.primary};
        padding: 0.8rem 3rem;
        border-radius: 0.5rem;
        border: none;
        transition: 0.5s;

        @media (max-width: 500px) {
          padding: 1rem;
          font-size: 1rem;
        }

        &:hover {
          background: ${({ theme }) => darken(0.05, theme.primary)};
        }
      }
    }
  }
`;

export const CodeItem = styled.div`
  background: ${({ theme }) => theme.gradient};
  padding: 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 300;
  color: ${({ theme }) => theme.white};
  width: 30rem;
  align-self: flex-start;
  transition: 1s !important;
  flex-direction: column;
  border-radius: 8px;

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
    margin: 0.2rem 2rem 0.5rem;
    margin-left: 1rem;

    @media (max-width: 425px) {
      display: flex;
      flex-wrap: wrap;
    }
  }

  .purple {
    color: ${({ theme }) => theme.purple};
  }

  .blue {
    color: ${({ theme }) => theme.blue};
  }

  .comment {
    color: ${({ theme }) => theme.text};
    margin-bottom: 1rem;
    display: block;
  }
`;

export const ContentCardCode = styled.div`
  display: flex;
  margin-left: 1.5rem !important;
  flex-direction: column;
`;
