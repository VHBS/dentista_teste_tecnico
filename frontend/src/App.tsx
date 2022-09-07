import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import BarraDeNavegacao from './components/BarraDeNavegacao';
import CadastrarPagamento from './pages/CadastrarPagamento';
import FiltrarPagamentoPorData from './pages/FiltrarPagamentoPorData';
import Inicio from './pages/Inicio';

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: 'Fira Sans', sans-serif; 
  }

  body {
    width: 100vw;
    background-color: rgb(202, 240, 248);
  }
`;

function App() {
  return (
    <BrowserRouter>
      <EstiloGlobal />
      <BarraDeNavegacao />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/pagamento" element={<CadastrarPagamento />} />
        <Route
          path="/filtrar-pagamento"
          element={<FiltrarPagamentoPorData />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
