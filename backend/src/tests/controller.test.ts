import { NextFunction, Request, Response } from 'express';
import controllerPagamento, { servicePagamento } from '../factory/FactoryPagamento';
import IRequestPagamento from './mocks/pagamento/interface/pagamento';
import {
  mockPagamentosCriados,
  mockPagamentosFiltradosPorData,
  mockPagamentosFiltradosServiceSucesso,
} from './mocks/pagamento/mocksPagamentos';

describe('Testando a camada Controller', () => {
  const mockResponse = {} as Response;
  const mockNext: NextFunction = jest.fn();
  const mockRequestCriarPagamentos = {
    body: {
      data: '2022-09-30',
      valor: '1000',
      parcelas: 3,
    },
  } as Request;

  const mockRequestFiltrarPagamentos = {
    query: { dataInicial: '2022-10-30' },
  } as IRequestPagamento;

  beforeEach(() => {
    mockResponse.json = jest.fn().mockReturnValue(mockResponse);
    mockResponse.status = jest.fn().mockReturnValue(mockResponse);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Testando casos de sucesso', () => {
    it('Pagamento cadastrado com sucesso', async () => {
      jest.spyOn(servicePagamento, 'criarPagamento').mockResolvedValue(mockPagamentosCriados);
      await controllerPagamento.criarPagamento(mockRequestCriarPagamentos, mockResponse, mockNext);

      expect(mockNext).toHaveBeenCalledTimes(0);
      expect(mockResponse.json).toHaveBeenCalledWith(mockPagamentosCriados);
      expect(mockResponse.status).toHaveBeenCalledWith(200);
    });

    it('Filtrando pagamentos por data com sucesso', async () => {
      jest.spyOn(servicePagamento, 'filtrarPagamentoPorData').mockResolvedValue(mockPagamentosFiltradosServiceSucesso);
      await controllerPagamento.filtrarPagamentoPorData(mockRequestFiltrarPagamentos, mockResponse, mockNext);

      expect(mockNext).toHaveBeenCalledTimes(0);
      expect(mockResponse.json).toHaveBeenCalledWith(mockPagamentosFiltradosPorData);
      expect(mockResponse.status).toHaveBeenCalledWith(200);
    });
  });
  describe('Testando casos de erros', () => {
    it('Pagamento não cadastrado', async () => {
      jest.spyOn(servicePagamento, 'criarPagamento').mockRejectedValue(new Error());
      await controllerPagamento.criarPagamento(mockRequestCriarPagamentos, mockResponse, mockNext);

      expect(mockNext).toHaveBeenCalledTimes(1);
    });

    it('Filtro não realizado', async () => {
      jest.spyOn(servicePagamento, 'filtrarPagamentoPorData').mockRejectedValue(new Error());
      await controllerPagamento.filtrarPagamentoPorData(mockRequestFiltrarPagamentos, mockResponse, mockNext);

      expect(mockNext).toHaveBeenCalledTimes(1);
    });
  });
});
