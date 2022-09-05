import styled from 'styled-components';

export const Nav = styled.nav`
  @media (max-width: 380px) {
    margin-top: -2em;

    height: 6em;
    h3 {
      display: none;
    }
    .container {
      height: 6em;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
  @media (min-width: 380px) and (max-width: 532px) {
    margin-top: -2em;
    height: 4em;
  }
  height: 2em;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(155, 155, 155, 0.7);
  margin-top: -2em;

  h3 {
    padding: 0 0.5em;
    text-align: center;
  }

  .container {
    padding: 0 0.5em;
    display: flex;
  }
  position: fixed;
`;
