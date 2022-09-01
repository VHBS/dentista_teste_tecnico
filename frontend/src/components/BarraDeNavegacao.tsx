import { useNavigate } from 'react-router-dom';

export default function BarraDeNavegacao() {
  const navigate = useNavigate();
  return (
    <nav>
      <button type="button" onClick={() => navigate('/')}>
        Inicio
      </button>
      <button type="button" onClick={() => navigate('/pagamento')}>
        Cadastrar Pagamento
      </button>
    </nav>
  );
}
