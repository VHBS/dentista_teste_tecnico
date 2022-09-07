import styled from 'styled-components';

export const Pagamentos = styled.div`
  @media (min-width: 533px) {
    .container-detalhes {
      width: 400px;
      padding: 2em;
      border-radius: 1em;
      margin-bottom: 2em;
      border: solid 2px rgba(3, 4, 94, 0.5);
    }
  }
  display: flex;
  justify-content: center;
  margin: auto;
  padding-bottom: 2em;

  .detalhe {
    padding: 1em;
    text-align: justify;

    p {
      padding-block: 0.5em;
    }
  }
`;
