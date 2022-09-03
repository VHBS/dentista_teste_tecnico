import { TypeCriarPagamento, TypeCriarPagamentoSaida } from '../../@types/pagamento';

export interface IService {
  criarPagamento: ({ data, valor, parcelas }: TypeCriarPagamento) => Promise<TypeCriarPagamentoSaida[]>;
}
