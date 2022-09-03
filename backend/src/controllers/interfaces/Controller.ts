import { NextFunction, Request, Response } from 'express';
import { TypeCriarPagamentoSaida } from '../../@types/pagamento';

export interface IControllerPagamento {
  criarPagamento: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<Response<TypeCriarPagamentoSaida[]> | void>;
}
