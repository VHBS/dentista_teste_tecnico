import styled from 'styled-components';

export const Nav = styled.nav`
  backdrop-filter: blur(0.5em);
  z-index: 1;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(3, 4, 94, 0.7);
  position: fixed;
  margin-top: 0;
  h3 {
    color: white;
  }
  .container {
    display: flex;
  }

  @media (max-width: 380px) {
    h3 {
      display: none;
    }
    .container {
      width: 100%;
      flex-direction: column;
      justify-content: space-around;
    }
    button {
      margin: 0.25em;
    }
  }

  @media (min-width: 380px) and (max-width: 486px) {
    height: 4em;
    h3 {
      padding: 0 0.5em;
      text-align: center;
    }
  }

  @media (min-width: 486px) {
    h3 {
      padding: 0 0.5em;
      text-align: center;
    }
    button {
      margin: 0.5em;
    }
  }
`;
