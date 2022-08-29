import { Request, Response } from 'express';

const controllerPagamentoCreate = async (req: Request, res: Response) => {
  return res.status(200).json({
    message: 'Estou vivo',
  });
};

export default controllerPagamentoCreate;
