import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 2em;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image {
    display: flex;
    justify-content: center;
    height: 200px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    padding: 1em;
    border: 2px solid rgba(0, 0, 0, 0.1);
    color: white;
    border-radius: 1em;
    width: 500px;
    div {
      display: flex;
      gap: 1em;
    }
  }
`