import { Request, Response, NextFunction } from 'express';
import { TypeFiltroPagamentoPorDataEntrada, TypePagamentoSaida } from '../@types/pagamento';
import { IServicePagamento } from '../services/interfaces/Service';
import { IControllerPagamento } from './interfaces/Controller';

export default class ControllerPagamento implements IControllerPagamento {
  private _service: IServicePagamento;

  constructor(service: IServicePagamento) {
    this._service = service;
  }

  public criarPagamento = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<TypePagamentoSaida[]> | void> => {
    try {
      const { data, valor, parcelas } = req.body;
      const result = await this._service.criarPagamento({ data, valor, parcelas });
      return res.status(200).json(result);
    } catch (error) {
      return next(error);
    }
  };

  public filtrarPagamentoPorData = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<TypePagamentoSaida[]> | void> => {
    try {
      const { dataInicial, dataFinal } = req.query as TypeFiltroPagamentoPorDataEntrada;
      const result = await this._service.filtrarPagamentoPorData({ dataInicial, dataFinal });
      return res.status(result.status).json(result.resposta);
    } catch (error) {
      return next(error);
    }
  };
}
