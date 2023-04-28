import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  a {
    cursor: default;
  }

  > section {
    margin: 8rem auto auto;
    width: 80%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
    align-items: center;
    justify-content: center;
    gap: 5rem;
    flex-wrap: wrap;

    @media (max-width: 1000px) {
      gap: 5rem;
    }

    @media (max-width: 700px) {
      gap: 3rem;
      margin-top: 5rem;
    }
  }
`;
