import axios from 'axios';

import TypePagamentoEntrada from '../../@types/pagamento';

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001',
});

const testandoAxios = async () => {
  const { data } = await api.get('/teste');

  return data;
};

const requisicaoCriarPagamento = async (body: TypePagamentoEntrada) => {
  const { data } = await api.post('/pagamento', body);

  return data;
};

export { testandoAxios, requisicaoCriarPagamento };
export default api;
