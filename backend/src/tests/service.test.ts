import { modelPagamento, servicePagamento } from '../factory/FactoryPagamento';
import {
  mockFiltrarPagamentoEntrada,
  mockCriarPagamentoEntrada,
  mockPagamentosCriados,
  mockPagamentosFiltradosPorData,
  mockPagamentosFiltradosServiceErro,
  mockPagamentosFiltradosServiceErroResposta,
  mockPagamentosFiltradosServiceSucesso,
} from './mocks/pagamento/mocksPagamentos';

describe('Testando a camada Service de Pagamento', () => {
  it('Pagamento cadastrado com sucesso', async () => {
    jest.spyOn(modelPagamento, 'criarPagamento').mockResolvedValue(mockPagamentosCriados);

    const pagamentoCadastrado = await servicePagamento.criarPagamento(mockCriarPagamentoEntrada);

    expect(pagamentoCadastrado).toBe(mockPagamentosCriados);
  });

  it('Filtrando pagamentos por data com sucesso', async () => {
    jest.spyOn(modelPagamento, 'filtrarPagamentoPorData').mockResolvedValue(mockPagamentosFiltradosPorData);

    const pagamentosFiltrados = await servicePagamento.filtrarPagamentoPorData(mockFiltrarPagamentoEntrada);

    expect(pagamentosFiltrados).toStrictEqual(mockPagamentosFiltradosServiceSucesso);
    expect(pagamentosFiltrados.resposta).toBe(mockPagamentosFiltradosPorData);
    expect(pagamentosFiltrados.status).toBe(200);
  });

  it('Filtrando pagamentos por data inexistente', async () => {
    jest.spyOn(modelPagamento, 'filtrarPagamentoPorData').mockResolvedValue([]);

    const pagamentosFiltrados = await servicePagamento.filtrarPagamentoPorData(mockFiltrarPagamentoEntrada);

    expect(pagamentosFiltrados).toStrictEqual(mockPagamentosFiltradosServiceErro);
    expect(pagamentosFiltrados.resposta).toStrictEqual(mockPagamentosFiltradosServiceErroResposta);
    expect(pagamentosFiltrados.status).toBe(404);
  });
});
