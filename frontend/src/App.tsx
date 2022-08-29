import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/index.css';

import Formulario from './pages/Formulario';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagamento" element={<Formulario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
