import styled from 'styled-components';

export const Container = styled.div``;

export const ContainerTooltip = styled.div`
  border: 2px solid ${({ theme }) => theme.text};
  padding: 0.5rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.text};
  color: #fff;
  font-size: 0.75rem;
`;
