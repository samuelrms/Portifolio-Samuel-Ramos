import styled from 'styled-components';
import { Props } from './ExperienceDetails.types';

export const Container = styled.div<Partial<Props>>`
  > a {
    position: relative;
    width: 100%;
    padding: 1.5rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.border};
    transition: 0.5s;
    cursor: pointer;
    overflow: hidden;

    &:hover {
      border-color: ${({ theme }) => theme.primary};

      > div.overlay {
        opacity: 0.5;
      }
    }

    > section {
      z-index: 2;
      width: 100%;

      h1 {
        color: ${({ theme }) => theme.primary};
        font-size: 1.5rem;
      }

      h2 {
        color: ${({ theme }) => theme.secondary};
        font-weight: 300;
        font-size: 1rem;
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

    .contentPeriod {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
      width: 100%;
      align-items: flex-end;

      h2 {
        color: ${({ theme }) => theme.secondary};
        font-size: 0.75rem;
        font-weight: 300;
      }
    }
  }
`;
