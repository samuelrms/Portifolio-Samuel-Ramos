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
    color: #fff;
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

export const Input = styled.input`
  height: 3rem;
  width: 100%;
  background: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 1.7rem 1.5rem;
  color: ${({ theme }) => theme.primary};
  border-radius: 0.5rem;
  font-size: 1.2rem;
  outline: none;
  transition: 0.5s;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 450px) {
    padding: 1.4rem;
    font-size: 1rem;
  }
`;

export const TextArea = styled(Input)`
  height: 10rem;
  resize: none;
  grid-column: 1 / 3;

  @media (max-width: 700px) {
    grid-column: 1;
  }
`;
