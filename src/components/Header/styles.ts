import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.backgroundLight};
  backdrop-filter: blur(13px) saturate(100%);
  background-color: rgba(122, 199, 227, 0);
  border: 0 0 1px solid ${({ theme }) => theme.secondary};
  position: fixed;
  z-index: 2;

  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;
