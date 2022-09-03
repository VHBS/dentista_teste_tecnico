import { TypeCriarPagamento, TypeCriarPagamentoSaida } from '../../@types/pagamento';

export interface IServicePagamento {
  criarPagamento: ({ data, valor, parcelas }: TypeCriarPagamento) => Promise<TypeCriarPagamentoSaida[]>;
}
