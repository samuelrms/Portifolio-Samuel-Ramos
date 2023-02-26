import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > main {
    padding-top: 4rem;
    > section {
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
    }
  }
`;
