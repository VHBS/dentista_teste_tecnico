/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

const errorMiddleware = async (
  err: ErrorRequestHandler,
  _req: Request,
  res: Response,
  _next: NextFunction,
): Promise<Response> => {
  console.log(err);
  return res.status(500).json({ message: 'Erro inesperado' });
};

export default errorMiddleware;
