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
      text-align: left;
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

    .contentAction {
      display: flex;
      width: 100%;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    @media (max-width: 700px) {
      padding: 0 2.5rem;

      p {
        font-size: 1rem;
      }

      a {
        font-size: 0.9rem;
        button {
          padding: 0.7rem 2rem;
        }
      }

      .contentAction {
        a {
          width: 100%;
          button {
            width: 100%;
          }
        }
      }
    }
  }

  .reactMarkdown {
    color: ${({ theme }) => theme.textLight};

    h1 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 2rem;
      margin-top: 2rem;
    }

    h2 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
      margin-top: 2rem;
    }

    ol {
      padding-left: 1.5rem;

      li > p {
        font-size: 1rem;
      }
    }

    p {
      margin-bottom: 1rem;
    }

    a {
      color: ${({ theme }) => theme.primary};
      font-weight: 700;
      text-transform: lowercase;
    }

    pre {
      background: none;
      border-radius: 0.5rem;
      padding: 0;
      margin-bottom: 0;
      color: ${({ theme }) => theme.textLight};

      > div {
        gap: 1rem;
      }
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      gap: 1rem;
      padding-bottom: 2rem;

      li {
        ul {
          padding-top: 1rem;
        }
      }
    }

    img {
      width: fit-content;
    }

    hr {
      margin-bottom: 1rem;
      margin-top: 0.5rem;
    }

    @media (max-width: 700px) {
      h1 {
        font-size: 1.5rem;
      }
    }
  }
`;
