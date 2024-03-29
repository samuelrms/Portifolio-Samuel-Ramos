import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
  cursor: pointer !important;

  p {
    color: ${({ theme }) => theme.primary};
    font-weight: 300;
    font-size: 1.3rem;
    text-transform: uppercase;
    text-align: center;
  }

  svg {
    width: 6.5rem;
    height: 6.5rem;
    color: ${({ theme }) => theme.secondary};
    transition: 0.3s;
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme.primary};
      transform: scale(0.95);
    }
  }

  @media (max-width: 1000px) {
    p {
      font-size: 1rem;
    }
    svg {
      width: 5rem;
      height: 5rem;
    }
  }
`;
