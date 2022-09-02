import axios from 'axios';

import TypePagamentoEntrada, {
  TypeFiltroPorDatas,
  TypePagamentoCadastrado,
} from '../../@types/pagamento';

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001',
});

const requisicaoCriarPagamento = async (
  body: TypePagamentoEntrada
): Promise<TypePagamentoCadastrado[]> => {
  const { data } = await api.post('/pagamento', body);

  return data;
};

const requisicaoFiltrarPagamentosPorData = async (
  body: TypeFiltroPorDatas
): Promise<TypePagamentoCadastrado[]> => {
  const params = new URLSearchParams();
  params.append('dataInicial', body.dataInicial);
  params.append('dataFinal', body.dataFinal);

  const { data } = await api.get('/filtrar-pagamento', { params });

  return data;
};

export { requisicaoCriarPagamento, requisicaoFiltrarPagamentosPorData };
export default api;
