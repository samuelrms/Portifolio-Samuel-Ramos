import styled from 'styled-components';

export const Container = styled.div``;

export const ContainerTooltip = styled.div`
  border: 2px solid ${({ theme }) => theme.primary};
  padding: 0.5rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.white};
  font-size: 0.75rem;
  z-index: 99;
`;
