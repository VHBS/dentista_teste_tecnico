import { useNavigate } from 'react-router-dom';

import { Button } from '../styles/componentesGenericos';

export default function Inicio() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Dentista Érica - Softeo</h1>

      <Button type="button" onClick={() => navigate('/pagamento')}>
        Cadastrar Pagamento
      </Button>
    </div>
  );
}
