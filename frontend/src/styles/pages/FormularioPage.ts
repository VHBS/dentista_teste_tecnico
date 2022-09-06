import styled from 'styled-components';

export const FormularioPage = styled.div`
  @media (max-width: 380px) {
    padding-top: 8em;
  }
  @media (min-width: 380px) and (max-width: 486px) {
    padding-top: 6em;
  }
  @media (min-width: 486px) {
    padding-top: 4em;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
