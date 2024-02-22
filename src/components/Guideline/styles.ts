import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.section<{ count: number }>`
  width: 100%;
  padding-bottom: 8rem;
  border-bottom: 1px solid
    ${({ theme, count }) => (count > 1 ? theme.primary : 'none')};

  a {
    cursor: default;
  }

  > section {
    margin: 8rem auto auto;
    width: 80%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
    align-items: center;
    justify-content: center;
    gap: 5rem;
    flex-wrap: wrap;

    @media (max-width: 1000px) {
      gap: 5rem;
    }

    @media (max-width: 700px) {
      gap: 3rem;
      margin-top: 5rem;
    }
  }

  .contentExperience {
    padding-top: 8rem;
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
