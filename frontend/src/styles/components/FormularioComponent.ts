import styled from 'styled-components';

export const FormularioComponent = styled.div`
  @media (max-width: 532px) {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: center;

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 2em 0;

      label {
        display: flex;
        height: 3em;
        padding: 0 1em;
        display: flex;
        flex-wrap: wrap;
        align-items: start;
        justify-content: space-between;
        span {
          text-align: start;
          width: 12em;
        }
      }
      button {
        margin: 0;
      }
    }
  }
  @media (min-width: 532px) {
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: center;

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 2em;

      label {
        padding: 1em 2em;
        display: flex;
        align-items: center;
        justify-content: space-between;
        span {
          padding-right: 2em;
          width: 12em;
        }
      }
      button {
        margin: 0;
      }
    }
  }
`;
