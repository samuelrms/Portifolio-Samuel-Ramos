import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.form`
  margin-top: 8rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  > .name {
    grid-column: 1 / 3;
  }

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

    &:disabled {
      opacity: 0.5;
    }

    &:not(:disabled):hover {
      background: ${({ theme }) => darken(0.05, theme.primary)};
    }
  }

  @media (max-width: 1000px) {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 450px) {
    > button {
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
    }
  }
`;
