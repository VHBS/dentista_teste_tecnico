const mockCriarPagamentoEntrada = {
  data: '2022-09-30',
  valor: '1000',
  parcelas: '3',
};

const mockFiltrarPagamentoEntrada = {
  dataInicial: '2022-10-31',
  dataFinal: '2022-11-01',
};

const mockPagamentosCriados = [
  {
    id: 96,
    data: '2022-09-30',
    valor: 333,
    parcela: 1,
    totalDeParcelas: 3,
  },
  {
    id: 97,
    data: '2022-10-30',
    valor: 333,
    parcela: 2,
    totalDeParcelas: 3,
  },
  {
    id: 98,
    data: '2022-11-29',
    valor: 334,
    parcela: 3,
    totalDeParcelas: 3,
  },
];

const mockPagamentosFiltradosPorData = [
  {
    id: 7,
    data: '2022-10-31',
    valor: 33334,
    parcela: 3,
    totalDeParcelas: 3,
  },
  {
    id: 9,
    data: '2022-10-30',
    valor: 250,
    parcela: 2,
    totalDeParcelas: 4,
  },
  {
    id: 14,
    data: '2022-10-31',
    valor: 33334,
    parcela: 3,
    totalDeParcelas: 3,
  },
  {
    id: 17,
    data: '2022-11-01',
    valor: 100000,
    parcela: 3,
    totalDeParcelas: 10,
  },
];

const mockPagamentosFiltradosServiceSucesso = {
  status: 200,
  resposta: mockPagamentosFiltradosPorData,
};

const mockPagamentosFiltradosServiceErroResposta = {
  menssagem: 'Nenhum pagamento foi encontrado entre as datas especificadas!',
};

const mockPagamentosFiltradosServiceErro = {
  status: 404,
  resposta: mockPagamentosFiltradosServiceErroResposta,
};

export {
  mockCriarPagamentoEntrada,
  mockFiltrarPagamentoEntrada,
  mockPagamentosCriados,
  mockPagamentosFiltradosPorData,
  mockPagamentosFiltradosServiceSucesso,
  mockPagamentosFiltradosServiceErroResposta,
  mockPagamentosFiltradosServiceErro,
};
