import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > main {
    padding-top: 4rem;
    > section {
      margin: 4rem auto;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;

      @media (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
      }

      @media (max-width: 550px) {
        grid-template-columns: 1fr;
      }
    }

    .notFound {
      margin: 4rem auto;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 100%;
      width: 100%;
      color: ${({ theme }) => theme.primary};
      font-family: 'Press Start 2P', 'Fira Code', monospace;
      gap: 1rem;

      h2,
      h3,
      h4 {
        font-family: inherit;
        text-align: center;
      }

      h2 {
        font-size: 10rem;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: ${({ theme }) => theme.secondary};
        color: ${({ theme }) => theme.inputBackground};
      }

      h3 {
        font-size: 6rem;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: ${({ theme }) => theme.white};
      }

      h4 {
        color: ${({ theme }) => theme.white};
      }

      @media (max-width: 1000px) {
        h2 {
          font-size: 8rem;
        }

        h3 {
          font-size: 4rem;
        }
      }

      @media (max-width: 550px) {
        h2 {
          font-size: 5rem;
        }

        h3 {
          font-size: 2rem;
        }

        h4 {
          font-size: 0.75rem;
        }
      }
    }
  }
`;

export const Search = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  button {
    position: absolute;
    right: 0;
    top: 50%;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    margin-right: 1rem;
    transition: 0.5s;
    height: fit-content;
    transform: translateY(-50%);

    svg {
      color: ${({ theme }) => theme.primary};
    }

    &:hover {
      svg {
        transform: scale(1.1);
        transition: all 0.5s ease;
      }
    }
  }
`;
