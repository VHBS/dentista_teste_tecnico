import { useNavigate } from 'react-router-dom';

export default function Inicio() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <h1>Dentista Érica - Softeo</h1>

      <button type="button" onClick={() => navigate('/pagamento')}>
        Cadastrar Pagamento
      </button>
    </div>
  );
}
