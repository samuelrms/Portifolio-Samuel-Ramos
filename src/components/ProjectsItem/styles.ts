import styled from 'styled-components';
import { Props } from './ProjectsItem.types';

export const Container = styled.div<Partial<Props>>`
  display: flex;
  width: 100%;
  height: 25rem;
  align-items: flex-end;
  position: relative;

  &:hover {
    > section {
      > div.text {
        right: -12rem;
      }
      > div.overlay {
        opacity: 0.4;
      }
    }

    > button a {
      color: ${({ theme }) => theme.primary};
    }
  }

  > button {
    height: 4rem;
    margin: 0 0 3rem 5rem;
    background: none;
    border: none;
    font-weight: 300;

    a {
      color: ${({ theme }) => theme.white};
      font-size: 2rem;
      font-weight: 300;
      display: flex;
      align-items: center;
      gap: 0.8rem;
      cursor: pointer !important;

      transition: 0.5s;
    }
  }

  > section {
    width: 50rem;
    height: 100%;
    background: url(${({ imgURL }) => imgURL}) no-repeat center;
    background-size: cover;
    position: relative;

    > div.overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.gradient};
      opacity: 0.75;
      transition: 0.5s;
    }

    > div.text {
      position: absolute;
      top: 3rem;
      right: -10rem;
      transition: 0.5s;
      width: 100%;

      h1 {
        color: ${({ theme }) => theme.primary};
        font-size: 2.5rem;
        text-shadow: ${({ theme }) => theme.textShadow};
        text-transform: capitalize;
      }

      h2 {
        color: ${({ theme }) => theme.secondary};
        font-size: 2rem;
        text-shadow: ${({ theme }) => theme.textShadow};
        font-weight: 300;
      }
    }
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    > button {
      margin: 3rem 5rem 0 0;
    }

    > section > div.text {
      text-align: right;
      right: 0;
      left: -10rem;
    }

    &:hover {
      > section > div.text {
        left: -12rem;
      }
    }
  }

  @media (max-width: 1450px) {
    > section {
      width: 40rem;
    }
  }

  @media (max-width: 1000px) {
    > section {
      width: 100%;

      > div.text {
        left: 1rem;
        top: 1rem;
      }
    }

    > button {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      margin: 0;
    }

    &:nth-child(even) {
      flex-direction: row;

      > section {
        width: 100%;

        > div.text {
          left: 1rem;
          top: 1rem;
          text-align: left;
        }
      }

      > button {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        margin: 0;
      }

      &:hover {
        > section > div.text {
          left: 1rem;
        }
      }

      @media (max-width: 450px) {
        > section > div.text {
          left: 0.5rem;
        }
      }
    }
  }

  @media (max-width: 700px) {
    height: 17rem;
  }

  @media (max-width: 450px) {
    > button {
      height: auto;

      a {
        font-size: 1.5rem;
        gap: 0.8rem;
      }
    }

    > section > div.text {
      left: 0.5rem;

      h1 {
        font-size: 1.5rem;
      }
      h2 {
        font-size: 1rem;
      }
    }
  }
`;
