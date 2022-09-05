import { useNavigate } from 'react-router-dom';

import { Button } from '../styles/componentesGenericos';
import { Nav } from '../styles/Nav';

export default function BarraDeNavegacao() {
  const navigate = useNavigate();
  return (
    <Nav>
      <h3>Doutora Érica</h3>
      <div className="container">
        <Button type="button" onClick={() => navigate('/')}>
          Inicio
        </Button>
        <Button type="button" onClick={() => navigate('/pagamento')}>
          Cadastrar Pagamento
        </Button>
        <Button type="button" onClick={() => navigate('/filtrar-pagamento')}>
          Filtrar Pagamentos
        </Button>
      </div>
    </Nav>
  );
}
