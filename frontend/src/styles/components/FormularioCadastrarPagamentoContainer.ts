import styled from 'styled-components';

export const FormularioCadastrarPagamentoContainer = styled.div`
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
      }
    }
    button {
      margin: 0;
    }
  }
`;
