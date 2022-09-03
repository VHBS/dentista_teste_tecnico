import { NextFunction, Request, Response } from 'express';
import { TypePagamentoSaida } from '../../@types/pagamento';

export interface IControllerPagamento {
  criarPagamento: (req: Request, res: Response, next: NextFunction) => Promise<Response<TypePagamentoSaida[]> | void>;
  filtrarPagamentoPorData: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<Response<TypePagamentoSaida[]> | void>;
}
