import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '../styles/componentesGenericos';
import { FormularioComponent } from '../styles/components/FormularioComponent';
import { FormularioPage } from '../styles/pages/FormularioPage';

const ButtonInicial = styled(Button)`
  margin-block: 1em;
  width: 13em;
  height: 2em;
`;

export default function Inicio() {
  const navigate = useNavigate();
  return (
    <FormularioPage>
      <FormularioComponent>
        <h1>Dentista Érica - Softeo</h1>

        <ButtonInicial type="button" onClick={() => navigate('/pagamento')}>
          Cadastrar Pagamento
        </ButtonInicial>
        <ButtonInicial
          type="button"
          onClick={() => navigate('/filtrar-pagamento')}
        >
          Filtrar Pagamento
        </ButtonInicial>
      </FormularioComponent>
    </FormularioPage>
  );
}
