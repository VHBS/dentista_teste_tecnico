import { NextFunction, Request, Response } from 'express';
import { TypePagamentoSaida } from '../@types/pagamento';
import { serviceCriarPagamento, serviceFiltrarPagamentoPorData } from '../services/pagamento';

const controllerCriarPagamento = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response<TypePagamentoSaida[]> | void> => {
  try {
    const { data, valor, parcelas } = req.body;
    const result = await serviceCriarPagamento({ data, valor, parcelas });
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};

const controllerFiltrarPagamentoPorData = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response<TypePagamentoSaida> | void> => {
  try {
    const { dataInicial, dataFinal } = req.body;
    const result = await serviceFiltrarPagamentoPorData({ dataInicial, dataFinal });
    return res.status(result.status).json(result.resposta);
  } catch (error) {
    return next(error);
  }
};

export { controllerCriarPagamento, controllerFiltrarPagamentoPorData };
