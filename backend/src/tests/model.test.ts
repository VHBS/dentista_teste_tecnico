import { modelPagamento } from '../factory/FactoryPagamento';
import Pagamento from '../sequelize/models/Pagamento';
import {
  mockFiltrarPagamentoEntrada,
  mockPagamentosCriados,
  mockPagamentosFiltradosPorData,
} from './mocks/pagamento/mocksPagamentos';

describe('Testando a camada Model de Pagamento', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('Pagamento cadastrado com sucesso', async () => {
    jest.spyOn(Pagamento, 'bulkCreate').mockResolvedValue(mockPagamentosCriados as Pagamento[]);
    const pagamentosCadastrados = await modelPagamento.criarPagamento(mockPagamentosCriados);
    expect(pagamentosCadastrados).toBe(mockPagamentosCriados);
  });

  it('Filtrando pagamentos por data', async () => {
    jest.spyOn(Pagamento, 'findAll').mockResolvedValue(mockPagamentosFiltradosPorData as Pagamento[]);
    const pagamentosCadastrados = await modelPagamento.filtrarPagamentoPorData(mockFiltrarPagamentoEntrada);
    expect(pagamentosCadastrados).toBe(mockPagamentosFiltradosPorData);
  });
});
