/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { TypeMensagemDeErro } from '../@types/pagamento';

const errorMiddleware = async (
  err: ErrorRequestHandler,
  _req: Request,
  res: Response,
  _next: NextFunction,
): Promise<Response<TypeMensagemDeErro>> => {
  console.log(err);
  return res.status(500).json({ menssage: 'Erro inesperado' });
};

export default errorMiddleware;
