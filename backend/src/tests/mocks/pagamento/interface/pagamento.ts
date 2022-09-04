import { Request } from 'express';

export default interface IRequestPagamento extends Request {
  query: {
    dataInicial: string;
    dataFinal: string;
  };
}
