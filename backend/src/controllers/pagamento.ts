import { NextFunction, Request, Response } from 'express';
import TypePagamento from '../@types/pagamento';
import servicePagamentoCreate from '../services/pagamento';

const controllerPagamentoCreate = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response<TypePagamento> | void> => {
  try {
    const { data, valor } = req.body;
    const result = await servicePagamentoCreate({ data, valor });
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};

export default controllerPagamentoCreate;
