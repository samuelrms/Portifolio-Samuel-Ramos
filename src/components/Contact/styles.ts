import styled from 'styled-components';

export const Container = styled.section`
  padding-top: 4rem;
`;

export const Card = styled.div`
  cursor: pointer;
  width: 100%;
  background: ${({ theme }) => theme.gradient};
  padding: 2rem;
  font-weight: 300;
  color: #fff;
  align-self: flex-start;
  display: flex;
  transition: 1s !important;
  flex-direction: row;
  border-radius: 8px;
  gap: 1rem;
  align-items: center;

  @media (max-width: 1450px) {
    padding: 1.5rem;
    font-size: 0.8rem;
  }

  @media (max-width: 425px) {
    padding: 1rem;
  }

  &:hover {
    filter: brightness(1.2);

    svg {
      color: ${({ theme }) => theme.primary};
      transform: scale(0.95);
    }

    a,
    p {
      color: ${({ theme }) => theme.primary};
    }
  }

  &:nth-child(even) {
    align-self: flex-end;
  }

  > div {
    margin: 0.2rem 2rem;
    margin-left: 1rem;

    @media (max-width: 425px) {
      display: flex;
      flex-wrap: wrap;
    }
  }

  svg {
    height: 24px;
    width: 24px;
  }

  a,
  p {
    font-family: 'JetBrains Mono', monospace;
    color: inherit;
  }
`;

export const Content = styled.div`
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
`;
