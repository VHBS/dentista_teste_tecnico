import { NextFunction, Request, Response } from 'express';
import { TypeMensagemDeErro } from '../@types/pagamento';

const middlewarePagamentoCreate = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response<TypeMensagemDeErro> | void> => {
  try {
    const { valor, parcelas } = req.body;
    if (!valor || !parcelas) return res.status(400).json({ menssagem: 'Valor ou parcelas não informado' });
    return next();
  } catch (error) {
    return next(error);
  }
};

export default middlewarePagamentoCreate;
