import styled from 'styled-components';

export const Container = styled.div`
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
