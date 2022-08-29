import { Request, Response } from 'express';
import create from '../services/pagamento';

const controllerPagamentoCreate = async (req: Request, res: Response) => {
  const { data, valor } = req.body;
  const result = create({ data, valor });
  return res.status(200).json(result);
};

export default controllerPagamentoCreate;
