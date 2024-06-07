import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.primary};
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;

  > div {
    width: fit-content;
    transition: all 0.2s ease-in-out;
    margin: 0 0 auto;
  }

  pre {
    font-size: 14px;
    line-height: 1.6;
    white-space: pre-wrap;
    word-wrap: break-word;
    word-break: break-all;
    padding-right: 2rem;
  }

  pre > code {
    font-family: 'Fira Code';
  }
`;
