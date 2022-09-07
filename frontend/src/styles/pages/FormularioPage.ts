import styled from 'styled-components';

export const FormularioPage = styled.div`
  @media (max-width: 532px) {
    padding-top: 8em;
    .resumo-pagamentos {
      border-block: solid 1px rgba(3, 4, 94, 0.5);
      padding-block: 1em;
      background-color: rgb(144, 224, 239);
    }
    .container-pagamentos {
      text-align: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      border-radius: 0;
      z-index: 0;

      h3 {
        padding: 1em 1em 0 1em;
      }
    }
  }

  @media (min-width: 533px) {
    padding-top: 4em;
    .resumo-pagamentos {
      text-align: center;
      margin: auto;
      width: 400px;
      border: solid 2px rgba(3, 4, 94, 0.5);
      padding: 2em;
      border-radius: 1em;
    }

    .container-pagamentos {
      width: 400px;
    }
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .resumo-pagamentos {
    margin-top: 8em;
    margin-bottom: 2em;

    p {
      padding: 0.5em 1em;
    }
  }

  .container-pagamentos {
    top: 0;
    position: absolute;
    background-color: rgba(202, 240, 248);
    width: 100%;
    min-height: 100vh;
  }
`;
