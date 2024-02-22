import styled from 'styled-components';
import { Props } from './Thumb.types';

export const Container = styled.div<Partial<Props>>`
  width: 100%;
  background: url(${({ imgURL }) => imgURL}) no-repeat;
  background-position: center;
  background-size: cover;
  height: 36rem;
  position: relative;
  padding: 3rem 5rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  > section {
    z-index: 2;
    padding: 1rem 0;
    border-radius: 8px;

    h1 {
      color: ${({ theme }) => theme.primary};
      font-size: 3rem;
      text-shadow: 8px 8px 8px rgba(0, 0, 0, 0.6);
    }

    h2 {
      color: ${({ theme }) => theme.secondary};
      font-size: 2rem;
      font-weight: 300;
      text-shadow: 8px 8px 8px rgba(0, 0, 0, 0.6);
    }
  }

  > div.overlay {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.gradient};
    opacity: 0.7;
    transition: 0.5s;
  }

  @media (max-width: 700px) {
    padding: 2rem 2.5rem;
    height: 20rem;

    > section {
      h1 {
        font-size: 1.8rem;
      }

      h2 {
        font-size: 1.2rem;
      }
    }
  }
`;
