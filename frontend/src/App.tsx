import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/index.css';

import BarraDeNavegacao from './components/BarraDeNavegacao';
import CadastrarPagamento from './pages/CadastrarPagamento';
import Inicio from './pages/Inicio';

function App() {
  return (
    <BrowserRouter>
      <BarraDeNavegacao />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/pagamento" element={<CadastrarPagamento />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
