import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import BarraDeNavegacao from './components/BarraDeNavegacao';
import CadastrarPagamento from './pages/CadastrarPagamento';
import FiltrarPagamentoPorData from './pages/FiltrarPagamentoPorData';
import Inicio from './pages/Inicio';

const EstiloGlobal = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap');
  * {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: 'Fira Sans', sans-serif; 
  }

  body {
  width: 100vw;
  background-color: #cacaca;
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
