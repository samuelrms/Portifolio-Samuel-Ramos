import styled from 'styled-components';
import { Input } from '../Input';

export const TextArea = styled(Input)`
  height: 10rem;
  resize: none;
  grid-column: 1 / 3;

  @media (max-width: 700px) {
    grid-column: 1;
  }
`;
